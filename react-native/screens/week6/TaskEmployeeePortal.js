import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { RadioButton, TextInput } from 'react-native-paper'

export default function TaskEmployeeePortal() {
    const [maritalStatus, setmaritalStatus] = useState('')
    return (
        <View>
            <View>
                <Text>
                    Employee Portal
                </Text>
            </View>
            <View>
                <TextInput

                    style={{ opacity: 1, backgroundColor: 'rgba(122, 11, 11, 0)', marginBottom: 10 }}
                    underlineStyle={{ borderBottomWidth: 2, borderBottomColor: 'rgba(0, 255, 157, 1)' }}

                    placeholder='Enter Employee Name' />
            </View>
            <View>
                <TextInput placeholder='Enter Contact Number' />
            </View>
            <View>
                <Text>
                    Martial Status
                </Text>
            </View>
            <View>
                <RadioButton.Group onValueChange={(values) => setmaritalStatus(values)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton value='Yes' status={maritalStatus == 'Yes' ? 'checked' : 'unchecked'} />
                        <Text>
                            Yes
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton value='No' status={maritalStatus == 'No' ? 'checked' : 'unchecked'} />
                        <Text>
                            No
                        </Text>
                    </View>
                </RadioButton.Group>
            </View>
        </View>
    )
}