/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { View, Text, Pressable, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { openDatabase } from 'react-native-sqlite-storage'
import Icon from 'react-native-vector-icons/FontAwesome5';
const db = openDatabase({ name: 'Authentication.db' })
export default function HomeScreen({ navigation, route }) {
    const [data, setdata] = useState([])
    let fetchData = () => {
        db.transaction((tx) => {
            tx.executeSql('Select * from SignUp', [], (tx, results) => {
                let temp = []
                for (let index = 0; index < results.rows.length; index++) {
                    temp.push(results.rows.item(index))
                }
                console.log(temp)
                setdata(temp)
            })
        })
    }
    useEffect(fetchData, [])

    let deleteuser = (id) => {
        console.log(id)
        db.transaction((tx) => {
            tx.executeSql('Delete from SignUp where id = ?', [id], (tx, results) => {
                Alert.alert('Deleted Successfully')
                console.log('Deleted Successfully')
                fetchData()
            })
        })
    }
    const [showdata, setshowdata] = useState(true)
    return (
        <View>
            <Pressable onPress={() => setshowdata(!showdata)}>
                <View style={{ padding: 10, backgroundColor: '#3c04beff', marginTop: 30, width: '40%' }}>
                    <Text style={{
                        textAlign: 'center', color: '#ddd', fontSize: 16
                    }}>
                        View Data
                    </Text>
                </View>
            </Pressable>
            {
                showdata && (
                    <View style={{ maxHeight: '70%', marginTop: 30 }}>
                        {/* <Text>
                            {JSON.stringify(data)}
                        </Text> */}

                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ justifyContent: 'space-between', padding: 10 }}>
                                        <Text style={{ fontSize: 20 }}>
                                            {item.email}
                                        </Text>
                                        <Text style={{ fontSize: 20 }}>
                                            {item.password}
                                        </Text>
                                        <Pressable onPress={() => deleteuser(item.id)}>
                                            <Icon name='remove' size={25} color={'blue'} />
                                        </Pressable>
                                    </View>
                                )
                            }} />
                    </View>
                )

            }
            <Pressable onPress={() => navigation.navigate('login')}>
                <View style={{ padding: 10, backgroundColor: '#3c04beff', marginTop: 30, width: '40%' }}>
                    <Text style={{
                        textAlign: 'center', color: '#ddd', fontSize: 16
                    }}>
                        Log Out
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}