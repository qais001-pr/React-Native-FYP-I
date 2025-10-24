/* eslint-disable radix */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable react-hooks/rules-of-hooks */

import { View, Text, TextInput, Pressable, Alert, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { RadioButton } from 'react-native-paper'
import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({ name: 'employee.db' })

export default function myApp() {
    const [expensename, setexpensename] = useState('')
    const [amount, setamount] = useState('')
    const [category, setcategory] = useState('Food')
    const [paymentmethod, setpaymentmethod] = useState('Cash')
    const [listShown, setlistShown] = useState(true)
    const [data, setData] = useState([])

    const [foodprice, setfoodprice] = useState(0)
    const [travelprice, settravelprice] = useState(0)
    const [shoppingprice, setshoppingprice] = useState(0)
    const [totalAmount, setTotalPrice] = useState(0)

    // CREATE TABLE ON FIRST RUN
    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS expenseTable (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    expenseName TEXT,
                    amount INTEGER,
                    category TEXT,
                    payment_method TEXT
                );`
            )
        })
        fetchExpense()
    }, [])

    // FETCH ALL EXPENSES + CALCULATE TOTALS
    const fetchExpense = () => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM expenseTable', [], (tx, results) => {
                let temp = []
                let food = 0
                let travel = 0
                let shopping = 0
                let total = 0

                for (let i = 0; i < results.rows.length; ++i) {
                    let item = results.rows.item(i)
                    temp.push(item)

                    // Calculate category-wise totals
                    total += item.amount
                    if (item.category === 'Food') {
                        food += item.amount
                    } else if (item.category === 'Travel') {
                        travel += item.amount
                    } else if (item.category === 'Shopping') {
                        shopping += item.amount
                    }
                }

                setData(temp)
                setfoodprice(food)
                settravelprice(travel)
                setshoppingprice(shopping)
                setTotalPrice(total)
            })
        })
    }

    // SAVE NEW EXPENSE
    const saveExpense = () => {
        if (!expensename || !amount || !category || !paymentmethod) {
            Alert.alert('Validation Error', 'All fields are required!')
            return
        }

        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO expenseTable (expenseName, amount, category, payment_method) VALUES (?, ?, ?, ?)',
                [expensename, parseInt(amount), category, paymentmethod],
                () => {
                    Alert.alert('Success', 'Expense added successfully!')
                    setexpensename('')
                    setamount('')
                    setcategory('Food')
                    setpaymentmethod('Cash')
                    fetchExpense()
                },
                error => {
                    console.log('Insert error:', error.message)
                }
            )
        })
    }

    // DELETE A RECORD
    const deleteExpense = id => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM expenseTable WHERE id = ?', [id], () => {
                Alert.alert('Deleted', 'Expense deleted successfully!')
                fetchExpense()
            })
        })
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
            <View style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: '900' }}>Daily Expense Tracker</Text>
            </View>

            {/* Expense Name */}
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ padding: 10, borderColor: '#ceccccff', borderWidth: 2, fontSize: 14 }}
                    placeholder='Enter Expense Name'
                    value={expensename}
                    onChangeText={setexpensename}
                />
            </View>

            {/* Amount */}
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ padding: 10, borderColor: '#ceccccff', borderWidth: 2, fontSize: 14 }}
                    placeholder='Enter Amount'
                    keyboardType='numeric'
                    value={amount}
                    onChangeText={setamount}
                />
            </View>

            {/* Category */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: '700' }}>Category</Text>
            </View>
            <View style={{ gap: 10, flexDirection: 'row' }}>
                {['Food', 'Travel', 'Shopping'].map(item => (
                    <View
                        key={item}
                        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <RadioButton
                            status={category === item ? 'checked' : 'unchecked'}
                            onPress={() => setcategory(item)}
                        />
                        <Text>{item}</Text>
                    </View>
                ))}
            </View>

            {/* Payment Method */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: '700' }}>Payment Method</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                {['Cash', 'CreditCard'].map(method => (
                    <View
                        key={method}
                        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <RadioButton
                            status={paymentmethod === method ? 'checked' : 'unchecked'}
                            onPress={() => setpaymentmethod(method)}
                        />
                        <Text>{method === 'CreditCard' ? 'Credit Card' : 'Cash'}</Text>
                    </View>
                ))}
            </View>

            {/* Buttons */}
            <View style={{ gap: 10, padding: 10 }}>
                <Pressable
                    onPress={saveExpense}
                    style={{
                        backgroundColor: '#3d43b1ff',
                        padding: 18,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>Add Expense</Text>
                </Pressable>

                <Pressable
                    style={{
                        backgroundColor: '#3d43b1ff',
                        padding: 18,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => setlistShown(!listShown)}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>
                        {listShown ? 'Hide Expense List' : 'Show Expense List'}
                    </Text>
                </Pressable>
            </View>

            {/* Expense List */}
            {listShown && (
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    padding: 10,
                                    marginVertical: 5,
                                    borderWidth: 1,
                                    borderColor: '#ddd',
                                    borderRadius: 8,
                                }}
                            >
                                <Text style={{ fontWeight: '600' }}>
                                    {item.expenseName} - Rs. {item.amount}
                                </Text>
                                <Text>
                                    ({item.category} - {item.payment_method})
                                </Text>
                                <Pressable
                                    onPress={() => deleteExpense(item.id)}
                                    style={{
                                        backgroundColor: 'red',
                                        padding: 6,
                                        borderRadius: 5,
                                        marginTop: 5,
                                        alignSelf: 'flex-start',
                                    }}
                                >
                                    <Text style={{ color: 'white', fontSize: 12 }}>Delete</Text>
                                </Pressable>
                            </View>
                        )}
                    />

                    {/* Totals */}
                    <View style={{ marginTop: 10, padding: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>
                            Total Records: {data.length}
                        </Text>
                        <Text style={{ fontSize: 16 }}>Total Amount: Rs.{totalAmount}</Text>
                        <Text>Food: Rs.{foodprice}</Text>
                        <Text>Travel: Rs.{travelprice}</Text>
                        <Text>Shopping: Rs.{shoppingprice}</Text>
                    </View>
                </View>
            )}
        </View>
    )
}
