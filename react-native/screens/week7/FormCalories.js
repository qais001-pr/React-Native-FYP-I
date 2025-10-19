/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
import { View, Text, Button, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'

export default function FormCalories() {
    const [list, setlist] = useState([{ id: 100, name: 'Apple', calories: 100 }]);
    const [name, setname] = useState('')
    const [cal, setCal] = useState(0)
    const [ids, setid] = useState(0)
    const [update, showupdate] = useState(false)
    let add = () => {
        if (!name && !cal) {
            return;
        }
        if (!check(name)) {
            setlist([...list, { id: 1001 + list.length, name: name, calories: cal }])
        }
    }

    let change = ({ item }) => {
        console.log(item)
        showupdate(true)
        setid(item.id.toString())
        setCal(item.calories.toString())
        setname(item.name.toString())
    }
    let deleteItem = (n) => {
        let filtered = list.filter((l) => l.name !== n)
        setlist(filtered)
    }
    let check = (n) => {
        return list.find((l) => l.name.toString() === n.toString())
    }
    let updateItem = () => {
        let v = list.find((l) => l.id.toString() === ids.toString())
        console.log(v)
        v.name = name.toString();
        v.calories = cal.toString();
        setCal('')
        setname('')
        showupdate(!update)
    }
    return (
        <View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 16, padding: 10 }}>Name: </Text>
                <TextInput
                    style={{ padding: 10, borderWidth: 2 }}
                    placeholder='Enter Name'
                    value={name}
                    onChangeText={setname}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 16, padding: 10 }}>Calories:</Text>
                <TextInput
                    placeholder='Enter Calories'
                    style={{ padding: 10, borderWidth: 2 }}
                    inputMode='numeric'
                    value={cal}
                    onChangeText={setCal}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {
                    update ?
                        <View>
                            <Button title='Update'
                                onPress={updateItem} />
                        </View>
                        :
                        <View>
                            <Button title='Add'
                                onPress={add} />
                        </View>
                }
                {
                    !update &&
                    <View>
                        <Button title='Clear'
                            onPress={() => setlist([])}
                        />
                    </View>
                }
            </View>

            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-around', borderWidth: 2 }}>
                        <View >
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 20 }}>{item.name}</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 20 }}>{item.calories} Calories</Text>
                            </View>
                        </View>
                        <View style={{ padding: 10, gap: 10 }}>
                            <View>
                                <Button title='Delete'
                                    onPress={() => deleteItem(item.name)}
                                />
                            </View>
                            <View>
                                <Button title='Change'
                                    onPress={() => change({ item })}
                                />
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}
