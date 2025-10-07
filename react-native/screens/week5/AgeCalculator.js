/* eslint-disable jsx-quotes */
/* eslint-disable semi */
import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native'

export default function AgeCalculator() {
    const [age, setAge] = useState();
    const [ageCategory, setAgeCategory] = useState();
    function getCategory() {
        if (!age) {
            return;
        }
        if (age < 0) {
            setAgeCategory('Invalid Age');
        }
        else if (age <= 12) {
            setAgeCategory('Child');
        }
        else if (age <= 19) {
            setAgeCategory('Teenager');
        }
        else if (age <= 59) {
            setAgeCategory('Adult');
        }
        else {
            setAgeCategory('Senior Citizen');
        }
    }
    return (
        <View style={style.Container}>
            <View style={style.Header}>
                <Text style={style.HeaderText}>Age Calculator</Text>
            </View>
            <View style={style.InputContainer}>
                <TextInput
                    onChangeText={setAge}
                    placeholder='Enter your age' style={style.Input}
                    inputMode='numeric' />
            </View>
            <View style={style.ButtonContainer}>
                <Button title='Calculate Age' color='rgba(32, 6, 32, 1)' onPress={getCategory} />
            </View>
            <View style={style.Result}>
                <Text style={style.ResultText}>Your Age Category is: {ageCategory}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(161, 156, 156, 1)',
        padding: 16,
    },
    Header: {
        fontWeight: 'bold',
        marginBottom: 12,
    },
    HeaderText: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    InputContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Input: {
        width: '80%',
        height: 50,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(32, 6, 32, 1)',
        borderRadius: 8,
        padding: 8,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        fontSize: 16,
    },
    ButtonContainer: {
        width: '80%',
        marginBottom: 12,
    },
    Result: {
        marginTop: 12,
        fontWeight: 'bold',
    },
    ResultText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
