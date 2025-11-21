/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

/* eslint-disable semi */import { View, Text, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({ name: 'Authentication.db' });

export default function Login({ navigation }) {

    const [email, setEmail] = useState("qaismuhammad742@gmail.com")
    const [password, setPassword] = useState("123")
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = () => {

        if (!email || !password) {
            Alert.alert("Please enter both email and password");
            return;
        }

        db.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM SignUp WHERE email=? AND password=?`,
                [email, password],
                (txObj, resultSet) => {
                    if (resultSet.rows.length > 0) {
                        const user = resultSet.rows.item(0);
                        console.log(user)
                        Alert.alert("Login Successful", `Welcome ${user.fullname}`);
                        navigation.navigate('tabScreen')
                    } else {
                        Alert.alert("Invalid email or password");
                    }
                },
                (txObj, error) => {
                    console.log("Login error:", error);
                    Alert.alert("Something went wrong while logging in");
                }
            );
        });
    }

    return (
        <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>

            <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
                Login
            </Text>

            <TextInput
                placeholder="Email"
                style={{
                    borderWidth: 1,
                    borderColor: '#aaa',
                    padding: 10,
                    borderRadius: 8,
                    marginBottom: 15
                }}
                value={email}
                onChangeText={setEmail}
            />

            <View
                style={{
                    borderWidth: 1,
                    borderColor: '#aaa',
                    paddingHorizontal: 10,
                    borderRadius: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <TextInput
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    style={{ flex: 1, paddingVertical: 10 }}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity
                onPress={handleLogin}
                style={{
                    backgroundColor: '#007bff',
                    padding: 15,
                    borderRadius: 8,
                    marginTop: 25,
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 18,
                        textAlign: 'center',
                        fontWeight: '600',
                    }}
                >
                    Login
                </Text>
            </TouchableOpacity>
            <Pressable onPress={() => navigation.navigate('signup')}>
                <View>
                    <Text>
                        SignUp
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}
