import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper'

export default function CheckBox() {
    const [checkStatus, setScheckStatusf] = useState(false)
    return (
        <View style={{ flex: 1, padding: 30 }}>
            <Text>CheckBox</Text>
            <View>
                <Checkbox
                    status={checkStatus ? 'checked' : 'unchecked'}
                    onPress={() => setScheckStatusf(!checkStatus)}
                />
            </View>
        </View>
    )
}