/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { Button, View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    let increment = () => {
        setCount(count + 1)
        console.log(count);
    }
    return (
        <View style={styles.container}>
            <View style={styles.WelcomeBlock}>
                <Text style={[styles.text, { fontWeight: 900 }]}>Welcome</Text>
            </View>
            <View style={{ width: '70%', alignSelf: 'center' }}>

                <Button title="ADD" onPress={increment} color='rgba(146, 20, 174, 1)' />
            </View>
            <View style={styles.CounterContainer} >
                <Text style={styles.text}>Counter {count}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(12, 12, 189, 0.36)',
    },
    WelcomeBlock: {
        backgroundColor: 'lightblue',
        padding: 20,
        margin: 30,
        marginTop: 90,
        alignItems: 'center',
        fontWeight: 900
    },
    CounterContainer: {
        backgroundColor: 'lightgreen',
        padding: 20,
        margin: 40,
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        color: 'darkblue',
        marginVertical: 10,
        textAlign: 'center'
    }

})