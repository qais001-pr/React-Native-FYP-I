/* eslint-disable jsx-quotes */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable eol-last */
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
export default function CaffeBillingApp() {
    const [pizzaQuantity, setPizzaQuantity] = useState(0);
    const [burgurQuantity, setBurgurQuantity] = useState(0);
    const [friesQuantity, setFriesQuantity] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [finalBill, setFinalBill] = useState(0);
    let generatebill = () => {
        if (pizzaQuantity === '' && burgurQuantity === '' && friesQuantity === '') {
            return;
        }
        let subTotal1 = (pizzaQuantity * 1000) + (burgurQuantity * 500) + (friesQuantity * 300);
        let discount1 = subTotal1 * 0.1;
        let finalBill1 = subTotal1 - discount1;
        setSubTotal(subTotal1);
        setFinalBill(finalBill1);
        setDiscount(discount1);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Caffe Billing App</Text>
            </View>
            <View style={styles.TextInputContainer}>
                <Text style={styles.label}>Pizza (Rs.1000)</Text>
                <TextInput style={styles.input} placeholder="Enter Quantity here"
                    value={pizzaQuantity}
                    onChangeText={(text) => setPizzaQuantity(text)}
                    inputMode='numeric' />
            </View>
            <View style={styles.TextInputContainer}>
                <Text style={styles.label} >Burgur (Rs.500)</Text>
                <TextInput style={styles.input} placeholder="Enter Quantity here"
                    value={burgurQuantity}
                    onChangeText={(text) => setBurgurQuantity(text)}
                    inputMode='numeric' />
            </View>
            <View style={styles.TextInputContainer}>
                <Text style={styles.label}>Fries (Rs.300)</Text>
                <TextInput style={styles.input} placeholder="Enter Quantity here"
                    value={friesQuantity}
                    onChangeText={(text) => setFriesQuantity(text)}
                    inputMode='numeric' />
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Calculate Total' color='rgba(63, 53, 53, 1)'
                    onPress={generatebill} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.billLabel}>SubTotal: {subTotal}</Text>
                <Text style={styles.billLabel}>Discount: {discount}</Text>
                <Text style={styles.billLabel}>Final Bill: {finalBill}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center', marginTop: 90
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    TextInputContainer: {
        width: '100%',
        height: 60,
        marginTop: 20,
        marginLeft: 40
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingLeft: 10
    },
    buttonContainer: {
        marginTop: 60,
        width: '90%'
    },
    textContainer: {
        width: '90%',
        marginTop: 30,
        alignItems: 'center'
    },
    billLabel: {
        fontSize: 19,
        fontWeight: '700',
        color: 'brown'
    }
})