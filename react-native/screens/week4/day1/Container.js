/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { View, Text } from 'react-native'
import React from 'react'

export default function Container() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Subhan Allah</Text>
            <Text style={styles.text}>Masha Allah</Text>
            <Text style={styles.text}>Alhamdulillah</Text>
        </View>
    )
}

const styles = {
    container: {
        padding: 20,
        backgroundColor: 'lightblue',
        margin: 10,
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 2,
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        color: 'darkblue',
        marginVertical: 10,
        textAlign: 'center'
    }

}
