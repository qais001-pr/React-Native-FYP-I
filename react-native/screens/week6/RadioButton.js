import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper'


const GroupRadioSelect = () => {
    const [radioGroup1, setradioGroup1] = useState('First')
    return (
        <View>
            <Text>Group Radio Button</Text>
            <View>
                <RadioButton.Group
                    onValueChange={newValue => setradioGroup1(newValue)}
                >
                    <RadioButton value='first'
                        status={radioGroup1 === 'first' ? 'checked' : 'unchecked'} />
                    <RadioButton value='Second'
                        status={radioGroup1 === 'Second' ? 'checked' : 'unchecked'} />
                </RadioButton.Group>
            </View>
        </View>
    )
}


export default function RadioButtonScreen() {
    const [radioSelected, setradioSelected] = useState(false)
    return (
        <View>
            <View>
                <GroupRadioSelect />
            </View>
            <Text>RadioButton</Text>
            <View>
                <RadioButton
                    status={radioSelected ? 'checked' : 'unchecked'}
                    onPress={() => setradioSelected(!radioSelected)}
                />
            </View>
        </View>
    )
}

