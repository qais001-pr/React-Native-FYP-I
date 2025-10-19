/* eslint-disable eol-last */
/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { Checkbox, RadioButton, TextInput } from 'react-native-paper'
import QuizApp from './Task/QuizApp'

export default function QuizClass() {
    const [quantity, setQuantity] = useState()
    const [gender, setGender] = useState()
    const [discount, setDiscount] = useState()

    const [total, setTotal] = useState()
    const [greet, setGreet] = useState()



    let calculate = () => {

        let amounts = 0
        if (gender === 'Male') {
            amounts = 50 * quantity
            setGreet('Sir')
        }
        else {
            amounts = 45 * quantity
            setGreet('Mam')
        }
        if (discount) {
            let discounts = (amounts * 7) / 100
            amounts -= discounts
        }
        setTotal(amounts);
    }
    return (
        <View style={{
            flex: 1, padding: 10

        }}>
            {/* <View style={{ padding: 14,backgroundColor:'brown' }}>
                <Text>QuizClass</Text>
            </View> */}
            <View style={{ padding: 10, marginTop: 20 }}>
                <TextInput
                    placeholder='Enter Quantity'
                    value={quantity}
                    onChangeText={setQuantity}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 20 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <RadioButton
                        status={gender === 'Male' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Male')}
                    />
                    <Text style={{ fontSize: 19 }}>
                        Male
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <RadioButton
                        status={gender === 'Female' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Female')}
                    />
                    <Text>
                        Female
                    </Text>
                </View>

            </View>
            <View style={{ margin: 15, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Checkbox
                    status={discount ? 'checked' : 'unchecked'}
                    onPress={() => setDiscount(!discount)}
                />
                <Text>Discount</Text>
            </View>

            <View>
                <Button title='Calculate'
                    onPress={() => calculate()}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 16 }}>
                    Bill {total}
                </Text>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 16 }}>
                    Thanks You {greet}
                </Text>
            </View>
        </View >
    )
}