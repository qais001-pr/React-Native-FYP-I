/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Checkbox, RadioButton } from 'react-native-paper'
import React, { useState } from 'react'
export default function StudentPortal() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [cgpa, setCgpa] = useState('')
    const [search, setSearch] = useState(false)
    const [studentList, setStudentList] = useState([]);

    let checkStudent = () => studentList.find((student) => student.name === name)

    function addStudent() {
        if (!age || !name || !cgpa) {
            return;
        }
        if (checkStudent()) {
            return;
        }
        setStudentList((prevData) => [...prevData, { name: name, age: age, cgpa: cgpa }])
    }


    function searchStudent() {
        let student = checkStudent()
        if (student) {
            setAge(student.age)
            setCgpa(student.cgpa)
            setSearch(true)
        } else {
            setAge('')
            setCgpa('')
        }
    }
    function deleteAllStudent() {
        setStudentList([])
        setName('')
        setAge('')
        setCgpa('')
    }


    return (
        <View style={styles.SafeAreaView}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Student Portal</Text>
            </View>
            <View style={styles.CounterView}>
                <Text style={styles.CounterText}>Count {studentList.length}</Text>
            </View>
            <View style={styles.TextInputContainer}>
                <View>
                    <Text style={styles.TextInputLabel}>Name</Text>
                </View>
                <View>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        placeholder='Enter Name Here.........'
                        style={styles.TextInput}
                    />
                </View>
            </View>
            <View style={styles.TextInputContainer}>
                <View>
                    <Text style={styles.TextInputLabel}>Age</Text>
                </View>
                <View>
                    <TextInput
                        value={age}
                        onChangeText={setAge}
                        placeholder='Enter Age Here.........'
                        style={styles.TextInput}
                        inputMode='numeric'
                    />
                </View>
            </View>
            <View style={styles.TextInputContainer}>
                <View>
                    <Text style={styles.TextInputLabel}>CGPA</Text>
                </View>
                <View>
                    <TextInput
                        value={cgpa}
                        onChangeText={setCgpa}
                        placeholder='Enter CGPA Here.........'
                        style={styles.TextInput}
                        inputMode='decimal'
                    />
                </View>
            </View>


            <View style={styles.ButtonContainer}>
                <View style={styles.Button}>
                    <Button
                        title='Add'
                        color='rgba(179, 89, 89, 1)'
                        onPress={addStudent} />
                </View>
                <View style={styles.Button}>
                    <Button
                        title='Search'
                        color='rgba(179, 89, 89, 1)'
                        onPress={searchStudent} />
                </View>
                <View style={styles.Button}>
                    <Button
                        title='Show All'
                        color='rgba(179, 89, 89, 1)'
                        onPress={() => {
                            setSearch(!search)
                            console.log(JSON.stringify(studentList));
                        }} />
                </View>
                <View style={styles.Button}>
                    <Button
                        title='Delete All'
                        color='rgba(179, 89, 89, 1)'
                        onPress={deleteAllStudent} />

                </View>
            </View>

            <View>
                <Text>{search ? (!studentList) ? '' : JSON.stringify(studentList) : ''}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        padding: 10,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    headerView: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'rgba(202, 202, 193, 1)',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 25,
        fontWeight: '600',
    },
    CounterView: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'rgba(202, 202, 193, 1)',
    },
    CounterText: {
        textAlign: 'right',
        fontSize: 20,
        fontWeight: '600',
    },
    TextInputContainer: {
        padding: 6,
    },
    TextInputLabel: {
        fontSize: 19,
        margin: 6,
        fontWeight: 'bold',
    },
    TextInput: {
        borderWidth: 2,
        fontSize: 18,
        borderRadius: 4,
        borderColor: 'gray',
    },
    ButtonContainer: {
        // flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    Button: {
        margin: 2,
        padding: 5,
    },

})