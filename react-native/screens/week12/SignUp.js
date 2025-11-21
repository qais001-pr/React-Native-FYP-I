/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { openDatabase } from 'react-native-sqlite-storage'
const db = openDatabase({ name: 'Authentication.db' })
export default function SignUp({ navigation, route }) {
    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS SignUp (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        fullname Text,
                        email TEXT Unique,
                        password TEXT
                    );`
            )
        })
    }, [])



    const [fullname, setfullname] = useState('Muhammad Qais')
    const [email, setemail] = useState('qaismuhammad742@gmail.com')
    const [password, setpassword] = useState('123')
    const [confirmpassword, setconfirmpassword] = useState('123')

    let handleSignUp = () => {
        if (!fullname || !email || !password || !confirmpassword) {
            Alert.alert("All fields are required");
            return;
        }

        if (password !== confirmpassword) {
            Alert.alert("Password does not match");
            return;
        }

        db.transaction(tx => {

            tx.executeSql(
                `SELECT Count(*) as count FROM SignUp WHERE email=?`,
                [email],
                (txObj, resultSet) => {
                    let count = resultSet.rows.item(0).count;
                    console.log(count)
                    if (count > 0) {
                        Alert.alert("This email is already registered");
                        return;
                    }

                    tx.executeSql(
                        `INSERT INTO SignUp (fullname, email, password) VALUES (?, ?, ?)`,
                        [fullname, email, password],
                        (txObj, insertResult) => {
                            console.log("User registered successfully:", insertResult);
                            Alert.alert("Account created successfully");
                            setfullname("");
                            setemail("");
                            setpassword("");
                            setconfirmpassword("");
                            navigation.navigate("login");
                        },
                        (txObj, error) => {
                            console.log("Insert error:", error);
                            Alert.alert("Something went wrong while creating your account");
                        }
                    );
                },
                (txObj, error) => {
                    console.log("Select error:", txObj, error);
                    // Alert.alert("Error checking existing email");
                }
            );
        });
    };


    return (
        <View style={{ flex: 1, width: '100%', padding: 20 }}>
            <View>
                <Text>
                    SignUp
                </Text>
            </View>
            <View>
                <Text>
                    Full Name
                </Text>
                <TextInput value={fullname}
                    onChangeText={setfullname} />
            </View>
            <View>
                <Text>
                    Email
                </Text>
                <TextInput value={email}
                    onChangeText={setemail} />
            </View>
            <View>
                <Text>
                    Password
                </Text>
                <TextInput value={password}
                    onChangeText={setpassword} />
            </View>
            <View>
                <Text>
                    Confirm Password
                </Text>
                <TextInput value={confirmpassword}
                    onChangeText={setconfirmpassword} />
            </View>

            <Pressable onPress={handleSignUp}>
                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#dddd', padding: 20, borderRadius: 20, margin: 10 }}>
                    <Text >
                        SignUp
                    </Text>
                </View>
            </Pressable>

             <Pressable onPress={()=>navigation.navigate('login')}>
                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#dddd', padding: 20, borderRadius: 20, margin: 10 }}>
                    <Text >
                        Login
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}