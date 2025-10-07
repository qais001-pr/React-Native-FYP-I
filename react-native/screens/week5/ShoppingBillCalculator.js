/* eslint-disable semi */
/* eslint-disable jsx-quotes */
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function ShoppingBillCalculator() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>ShoppingBillCalculator</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Enter Product Name</Text>
                <TextInput placeholder='Enter Product Name' style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Product 1</Text>
                <TextInput placeholder='Enter Product 1 Price' style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Product 2</Text>
                <TextInput placeholder='Enter Product 2 Price' style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Product 3</Text>
                <TextInput placeholder='Enter Product 3 Price' style={styles.input} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Calculate Total' onPress={() => { console.log('') }} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Reset' onPress={() => { console.log('') }} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        // width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
    },
})