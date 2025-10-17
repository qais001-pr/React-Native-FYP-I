import { View, Text, TextInput, Button, BackHandler } from 'react-native'
import React, { useState } from 'react'

export default function SecretCodeUnlocker() {
    const [input, setinput] = useState('')
    const [error, setError] = useState('')
    const [invalidValue, setInvalidValue] = useState(0)
    let validate = () => {
        if (invalidValue === 3) {
            setError('Limit Reached Please Try Again Later')
            return;
        }
        if (input === '1441') {
            setError('Access Granted')

        }
        else {
            setInvalidValue(invalidValue + 1)
            setError('Access Denied')
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'centers' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'cyan', padding: 20 }}>
                <Text style={{ fontSize: 23, color: 'black' }}>SecretCodeUnlocker</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20, gap: 10 }}>
                <Text style={{ fontSize: 23, color: 'black' }}>Total Limit 3</Text>
                <Text style={{ fontSize: 23, color: 'black' }}>{invalidValue}</Text>
            </View>

            <View style={{ width: '100%', alignItems: 'center', marginTop: 20, marginBottom: 30 }}>
                <TextInput
                    style={{ fontSize: 18, borderWidth: 2, backgroundColor: 'white', borderRadius: 10, textAlign: 'center' }}
                    value={input}
                    onChangeText={setinput}

                    inputMode={invalidValue === 3 ? 'numeric' : 'none'}
                    placeholder='Enter 4 digits'
                    placeholderTextColor={'black'}
                    maxLength={4}
                />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title='Submit'
                    onPress={validate}
                />
            </View>
            {error &&
                <View style={{ backgroundColor: 'yellow', padding: 10, margin: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', textAlign: 'center' }}>
                        {error}
                    </Text>
                </View>
            }
        </View>
    )
}


