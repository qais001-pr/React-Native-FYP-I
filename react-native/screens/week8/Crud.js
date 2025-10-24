/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
import { View, Text, Button, TextInput, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'

export default function Crud() {
    const [list, setlist] = useState([{ id: 100, cityProvinceName: 'Punjab', cityName: 'RWP', cityPopulation: 3.8 }]);
    const [deletedlist, setdeletedlist] = useState([])
    const [cityProvinceName, setcityProvinceName] = useState('Punjab')
    const [cityName, setCityName] = useState('Rwp')
    const [citypopulation, setCityPoplation] = useState('3.5')
    const [ids, setid] = useState(0)
    const [update, showupdate] = useState(false)
    let add = () => {
        if (!cityProvinceName && !cityName && !citypopulation) {
            return;
        }
        if (!check(cityName)) {
            setlist([...list, { id: 1001 + list.length, cityProvinceName: cityProvinceName, cityName: cityName, cityPopulation: citypopulation }])
            setCityPoplation('')
            setcityProvinceName('')
            setCityName('')
        }
    }

    let change = ({ item }) => {
        console.log(item)
        showupdate(true)
        setid(item.id.toString())
        setcityProvinceName(item.cityProvinceName.toString())
        setCityName(item.cityName.toString())
        setCityPoplation(item.cityPopulation.toString())
    }
    let deleteItem = (n) => {
        let deleteItems = list.find((l) => l.cityName === n)
        setdeletedlist([...deletedlist, deleteItems])
        let filtered = list.filter((l) => l.cityName !== n)
        setlist(filtered)
    }
    let check = (n) => {
        return list.find((l) => l.cityName.toString() === n.toString())
    }
    let updateItem = () => {
        let v = list.find((l) => l.id.toString() === ids.toString())
        console.log(v)

        if (!check(cityName)) {
            v.cityName = cityName.toString();
        }
        v.cityPopulation = citypopulation.toString();
        v.cityProvinceName = cityProvinceName.toString();
        setCityPoplation('')
        setcityProvinceName('')
        setCityName('')
        showupdate(!update)
    }
    return (
        <View>
            <View style={{ padding: 10, marginTop: 20 }}>
                <TextInput
                    style={{ padding: 10, borderWidth: 2 }}
                    placeholder='Enter City Province Name'
                    value={cityProvinceName}
                    onChangeText={setcityProvinceName}
                />
            </View>

            <View style={{ padding: 10 }}>
                <TextInput
                    placeholder='Enter City Name'
                    style={{ padding: 10, borderWidth: 2 }}
                    inputMode='numeric'
                    value={cityName}
                    onChangeText={setCityName}
                />
            </View>
            <View style={{ padding: 10 }}>
                <TextInput
                    placeholder='Enter City Population'
                    style={{ padding: 10, borderWidth: 2 }}
                    inputMode='numeric'
                    value={citypopulation}
                    onChangeText={setCityPoplation}
                />
            </View>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                {
                    update ?
                        <View>
                            <Button title='Update'
                                onPress={updateItem} />
                        </View>
                        :
                        <View style={{ width: '35%' }}>
                            <Button title='Add'
                                onPress={add} />
                        </View>
                }
                {/* {
                    !update &&
                    <View>
                        <Button title='Clear'
                            onPress={() => setlist([])}
                        />
                    </View>
                } */}
            </View>

            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-around', borderRadius: 10, backgroundColor: '#aeb10eff' }}>
                        <View >
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontWeight: 'light', fontSize: 26, color: '#d1e616ff' }}>{item.cityProvinceName}</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontWeight: '600', fontSize: 20, color: '#000000ff' }}>{item.cityName}</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontWeight: '600', fontSize: 18, color: '#000000ff' }}>{item.cityPopulation} M</Text>
                            </View>
                        </View>
                        <View style={{ padding: 10, gap: 10 }}>
                            <View>
                                <Button title='View'
                                    onPress={() => {
                                        Alert.alert(`Province: ${cityProvinceName}`, `City: ${cityName} \nPopulation: ${citypopulation} M`)
                                    }}
                                    color={'#0d72d1ff'}
                                />
                            </View>
                            <View>
                                <Button title='Delete'
                                    onPress={() => deleteItem(item.cityName)}
                                    color={'#d10d4eff'}
                                />
                            </View>
                            <View>
                                <Button title='Update'
                                    onPress={() => change({ item })}
                                    color={'#0dd158ff'}
                                />
                            </View>
                        </View>
                    </View>
                )}
            />








            <View style={{ padding: 10, backgroundColor: 'yellow' }}>
                <Text style={{ fontSize: 25, padding: 10, fontWeight: '700' }}>
                    Deleted List
                </Text>
            </View>


            {
                deletedlist.length > 0 &&
                <View>
                    <FlatList
                        data={deletedlist}
                        renderItem={({ item }) => (
                            <View style={{ margin: 10, flexDirection: 'row', borderRadius: 10, backgroundColor: '#aeb10eff' }}>
                                <View >
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ fontWeight: 'light', fontSize: 26, color: '#d1e616ff' }}>{item.cityProvinceName}</Text>
                                    </View>
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ fontWeight: '600', fontSize: 20, color: '#000000ff' }}>{item.cityName}</Text>
                                    </View>
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ fontWeight: '600', fontSize: 18, color: '#000000ff' }}>{item.cityPopulation} M</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                    <View style={{}}>
                        <View>
                            <Button title='Clear'
                                onPress={() => setdeletedlist([])} />
                        </View>
                        <View>
                            <Button title='Restore'
                                onPress={() => {
                                    setlist([...list, ...deletedlist])
                                    setdeletedlist([])
                                }
                                }
                            />

                        </View>
                    </View>
                </View>
            }






        </View>
    )
}
