/* eslint-disable eol-last */
/* eslint-disable jsx-quotes */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'

export default function FlatlistsScreen() {


  const [name, setname] = useState('')
  const [cgpa, setcgpa] = useState()
  const [students, setStudent] = useState([
    { id: 101, name: 'Ali', cgpa: 2.0 }
  ])



  const addStudent = () => {
    setStudent([...students, {
      id: 101 + students.length * 2,
      name: name,
      cgpa: cgpa
    }])
  }
  const view = (item) => {
    Alert.alert(`Name: ${item?.name}`, `CGPA: ${item?.cgpa}`)
  }
  const deleteS = (id) => {
    let filtered = students.filter((s) => s.id !== id)
    setStudent(filtered)
  }
  return (
    <View>
      <View>
        <Text>FlatlistsScreen</Text>
      </View>
      <View>
        <TextInput
          placeholder='Enter Name'
          inputMode='text'
          value={name}
          onChangeText={setname}
        />
      </View>

      <View>
        <TextInput
          placeholder='Enter CGPA'
          inputMode='decimal'
          value={cgpa}
          onChangeText={setcgpa}
        />
      </View>

      <View>
        <Button title='Submit' onPress={addStudent} />
      </View>


      <FlatList
        keyExtractor={(item) => { item.id }}
        data={students}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>
                Name: {item.name}
              </Text>
            </View>
            <View>
              <Text>
                CGPA: {item.cgpa}
              </Text>
            </View>
            <View>
              <Button title='View' onPress={() => view(item)} />
            </View>
            <View>
              <Button title='Delete' onPress={() => deleteS(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  )
}