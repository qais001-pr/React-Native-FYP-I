/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable curly */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */

import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { RadioButton } from 'react-native-paper'
import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({ name: 'employee.db' })

export default function MyApp() {

    // 🔹 States
    const [cnic, setCnic] = useState('1')
    const [name, setName] = useState('Ali')
    const [province, setProvince] = useState('Punjab')
    const [gender, setGender] = useState('Male')
    const [employees, setEmployees] = useState([])
    const [editingId, setEditingId] = useState(null)

    // 🔹 Dropdown Data
    const provinces = [
        { key: 'Punjab', value: 'Punjab' },
        { key: 'Sindh', value: 'Sindh' },
        { key: 'Balochistan', value: 'Balochistan' },
        { key: 'Khyber Pakhtunkhwa', value: 'Khyber Pakhtunkhwa' },
    ]

    // 🔹 On Load: Create table
    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS employees (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    cnic TEXT Unique,
                    name TEXT,
                    gender TEXT,
                    province TEXT
                );`
            )
        })
        fetchEmployees()
    }, [])

    // 🔹 Fetch all employees
    const fetchEmployees = () => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM employees', [], (tx, results) => {
                let temp = []
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i))
                setEmployees(temp)
            })
        })
    }

    // 🔹 Create or Update Record
    const saveEmployee = () => {
        if (!cnic || !name || !province) {
            Alert.alert('Validation Error', 'All fields are required!')
            return
        }

        db.transaction(tx => {
            if (editingId) {
                tx.executeSql(
                    'UPDATE employees SET cnic=?, name=?, gender=?, province=? WHERE id=?',
                    [cnic, name, gender, province, editingId],
                    () => {
                        Alert.alert('Success', 'Record updated successfully!')
                        resetForm()
                        fetchEmployees()
                    },
                    error => {
                        if (error.message.contains('UNIQUE constraint'))
                            Alert.alert('cnic already exists')
                    }
                )
            } else {
                tx.executeSql(
                    'INSERT INTO employees (cnic, name, gender, province) VALUES (?, ?, ?, ?)',
                    [cnic, name, gender, province],
                    () => {
                        Alert.alert('Success', 'Record added successfully!')
                        resetForm()
                        fetchEmployees()
                    },
                    error => {
                        if (error.message.contains('UNIQUE constraint'))
                            Alert.alert('cnic already exists')
                    }
                )
            }
        })
    }

    // 🔹 Delete Record
    const deleteEmployee = id => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM employees WHERE id=?',
                [id],
                () => {
                    Alert.alert('Deleted', 'Record deleted successfully!')
                    fetchEmployees()
                },
                error => {
                    if (error.message.contains('UNIQUE constraint'))
                        Alert.alert('cnic already exists')
                }
            )
        })
    }

    // 🔹 Edit Record
    const editEmployee = item => {
        setEditingId(item.id)
        setCnic(item.cnic)
        setName(item.name)
        setGender(item.gender)
        setProvince(item.province)
    }

    // 🔹 Reset Form
    const resetForm = () => {
        setEditingId(null)
        setCnic('')
        setName('')
        setGender('Male')
        setProvince('')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Employee Form</Text>

            <TextInput
                style={styles.input}
                placeholder='Enter CNIC'
                value={cnic}
                onChangeText={setCnic}
            />

            <TextInput
                style={styles.input}
                placeholder='Enter Name'
                value={name}
                onChangeText={setName}
            />

            <View style={styles.radioRow}>
                <View style={styles.radioItem}>
                    <RadioButton
                        value='Male'
                        status={gender === 'Male' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Male')}
                    />
                    <Text>Male</Text>
                </View>
                <View style={styles.radioItem}>
                    <RadioButton
                        value='Female'
                        status={gender === 'Female' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Female')}
                    />
                    <Text>Female</Text>
                </View>
            </View>

            <Dropdown
                style={styles.dropdown}
                data={provinces}
                labelField='key'
                valueField='value'
                placeholder='Select Province'
                value={province}
                onChange={item => setProvince(item.value)}
            />

            <Button
                title={editingId ? 'Update Employee' : 'Add Employee'}
                onPress={saveEmployee}
            />

            <FlatList
                data={employees}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={{ flex: 1 }}>
                            {item.name} ({item.gender}) - {item.province}
                        </Text>
                        <TouchableOpacity onPress={() => editEmployee(item)}>
                            <Text style={styles.edit}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteEmployee(item.id)}>
                            <Text style={styles.delete}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10
    },
    radioRow: {
        flexDirection: 'row',
        marginBottom: 10
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        marginBottom: 10
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10
    },
    edit: {
        color: 'blue',
        marginHorizontal: 5
    },
    delete: {
        color: 'red'
    }
})
