/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { openDatabase } from 'react-native-sqlite-storage'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const db = openDatabase({ name: 'employee.db' })

export default function ImageEmployeePortal() {
    const [profilepicture, setprofilePicture] = useState(null)
    const [name, setname] = useState('')
    const [eid, seteid] = useState('')
    const [age, setage] = useState('')
    const [gender, setgender] = useState('')
    const [data, setdata] = useState([])

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS EmployeeForm (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            profilepicture TEXT,
            name TEXT,
            employeeid TEXT,
            age TEXT,
            gender TEXT
        );`
            )
        })
        fetchEmployees()
    }, [])

    const fetchEmployees = () => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM EmployeeForm', [], (_, results) => {
                let temp = []
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i))
                }
                setdata(temp)
            })
        })
    }
    console.log(data)

    const saveEmployee = () => {
        if (!name || !eid || !age || !gender) {
            alert('Please fill all fields')
            return
        }
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO EmployeeForm (profilepicture, name, employeeid, age, gender) VALUES (?,?,?,?,?)',
                [profilepicture, name, eid, age, gender],
                (_, results) => {
                    if (results.rowsAffected > 0) {
                        alert('Employee saved successfully')
                        fetchEmployees()
                    } else {
                        alert('Failed to save employee')
                    }
                }
            )
        })
    }

    let openCamera = () => {
        launchCamera({ mediaType: 'photo', quality: 1 }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else {
                const source = response.assets[0].uri;
                setprofilePicture(source);
            }
        })
    }
    let openGallery = () => {
        launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else {
                const source = response.assets[0].uri;
                setprofilePicture(source);
            }
        })
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Image Employee Portal</Text>
            </View>

            <View style={styles.imageContainer}>
                {profilepicture ? (
                    <Image
                        source={{ uri: profilepicture }}
                        style={styles.profileImage}
                    />
                ) : (
                    <View style={styles.imagePlaceholder}>
                        <Text style={{ fontSize: 17 }}>No Profile Picture</Text>
                    </View>
                )}

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.btnBlue} onPress={openCamera}>
                        <Text style={styles.btnText}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnBlue} onPress={openGallery}>
                        <Text style={styles.btnText}>Gallery</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='Full Name'
                    style={styles.textInput}
                    value={name}
                    onChangeText={setname}
                />
            </View>

            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='Employee ID'
                    style={styles.textInput}
                    value={eid}
                    onChangeText={seteid}
                />
            </View>

            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='Age'
                    style={styles.textInput}
                    value={age}
                    onChangeText={setage}
                    keyboardType='numeric'
                />
            </View>

            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='Gender'
                    style={styles.textInput}
                    value={gender}
                    onChangeText={setgender}
                />
            </View>

            <TouchableOpacity style={styles.btnSubmit} onPress={saveEmployee}>
                <Text style={styles.btnSubmitText}>Submit</Text>
            </TouchableOpacity>

            <Text style={styles.savedText}>Saved Employees:</Text>

            {data.map((item, index) => (
                <View key={index} style={styles.employeeCard}>
                    <Image
                        source={{ uri: item.profilepicture }}
                        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
                    />
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    <Text>ID: {item.employeeid}</Text>
                    <Text>Age: {item.age}</Text>
                    <Text>Gender: {item.gender}</Text>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#ddd',
        padding: 20,
        paddingBottom: 50,
    },
    headerContainer: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    headerText: {
        fontWeight: '900',
        fontSize: 22,
        textAlign: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    imagePlaceholder: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        backgroundColor: '#dfd',
        borderRadius: 100,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginTop: 20,
    },
    btnBlue: {
        width: 100,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'rgba(3, 3, 197, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#eee',
        fontSize: 17,
    },
    textInputContainer: {
        paddingVertical: 8,
    },
    textInput: {
        padding: 10,
        borderWidth: 2,
        borderColor: '#b1acacff',
        fontSize: 16,
        borderRadius: 6,
        backgroundColor: '#fff',
    },
    btnSubmit: {
        marginVertical: 20,
        height: 50,
        elevation: 4,
        borderRadius: 10,
        backgroundColor: 'rgba(8, 139, 67, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSubmitText: {
        color: '#eee',
        fontSize: 20,
        fontWeight: '600',
    },
    savedText: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    employeeCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
})
