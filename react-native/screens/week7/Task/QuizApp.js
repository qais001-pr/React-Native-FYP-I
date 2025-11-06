/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { RadioButton } from "react-native-paper";
const QuizApp = () => {
    const [index, setIndex] = useState(0);
    const [option, setoption] = useState('option1');
    const [score, setscore] = useState(0);
    const [disabledButton, setdisabledornot] = useState(false)
    const [timeout, settimeout] = useState(15)
    const [quizList, setQuizList] = useState([
        {
            question: 'What is the Capital of Pakistan?',
            option1: 'Lahore',
            option2: 'Islamabad',
            option3: 'Karachi',
            option4: 'Peshawar',
            solution: 'option2',
            disabled: false,
        },
        {
            question: 'Who wrote the national anthem of Pakistan?',
            option1: 'Allama Iqbal',
            option2: 'Hafeez Jalandhari',
            option3: 'Faiz Ahmed Faiz',
            option4: 'Ahmad Faraz',
            solution: 'option2',
            disabled: false,
        },
        {
            question: 'In which year did Pakistan gain independence?',
            option1: '1940',
            option2: '1945',
            option3: '1947',
            option4: '1950',
            solution: 'option3',
            disabled: false,
        },
        {
            question: 'What is the national language of Pakistan?',
            option1: 'Punjabi',
            option2: 'Urdu',
            option3: 'Sindhi',
            option4: 'Pashto',
            solution: 'option2',
            disabled: false,
        },
        {
            question: 'Which is the largest province of Pakistan by area?',
            option1: 'Punjab',
            option2: 'Sindh',
            option3: 'Balochistan',
            option4: 'Khyber Pakhtunkhwa',
            solution: 'option3',
            disabled: false,
        },
    ]);


    let nextQuestion = () => {
        if (index + 1 === quizList.length) return;
        setoption('option1');
        settimeout(15);
        setIndex(index + 1);
    };

    let previousQuestion = () => {
        if (index === 0) { return; }
        else if (index > 0) {
            setoption('option1')
            setIndex(index - 1);
        }
    };

    let SubmitAnswer = () => {
        if (quizList[index].solution === option) {
            setscore(score + 10)
        }
        else {
            let check = score - 10
            if (check < 0) {
                return;
            }
            else {
                setscore(score - 10)
            }
        }
    }
    useEffect(() => {
        if (timeout > 0 && !quizList[index].disabled) {
            const timer = setTimeout(() => settimeout(timeout - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeout === 0) {
            const updatedList = [...quizList];
            updatedList[index].disabled = true;
            setQuizList(updatedList);
        }
    }, [timeout, index]);

    return (
        <View style={{ flex: 1, backgroundColor: '#7c7878ff' }}>
            <View style={{ backgroundColor: '#fff', padding: 20, marginTop: 30 }}>
                <Text style={{
                    fontSize: 25, textAlign: 'center', fontWeight: '900',
                }}>
                    Quiz App
                </Text>
            </View>
            <View style={{ padding: 15, backgroundColor: '#c4bebeff', margin: 20, borderRadius: 5 }}>
                <View>
                    <Text style={{ fontSize: 20 }}>
                        Q{index + 1}: {quizList[index].question}
                    </Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            status={option === 'option1' ? 'checked' : 'unchecked'}
                            onPress={() => setoption('option1')}
                        />
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>{quizList[index].option1}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            status={option === 'option2' ? "checked" : 'unchecked'}
                            onPress={() => { setoption('option2') }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>{quizList[index].option2}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            status={option === 'option3' ? 'checked' : 'unchecked'}
                            onPress={() => { setoption('option3') }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>{quizList[index].option3}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            status={option === 'option4' ? 'checked' : 'unchecked'}
                            onPress={() => { setoption('option4') }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>{quizList[index].option4}</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                {
                    index > 0 &&
                    < View style={{ width: '30%' }}>
                        <Button
                            title="Previous"
                            color={'#1f0c0cff'}
                            onPress={previousQuestion}
                        />
                    </View>
                }
                < View style={{ width: '30%' }}>
                    <Button
                        disabled={quizList[index].disabled}
                        title="Submit"
                        color={'#1f0c0cff'}
                        onPress={SubmitAnswer}
                    />
                </View>
                {
                    index + 1 !== quizList.length &&
                    < View style={{ width: '30%' }}>
                        <Button
                            title="Next"
                            color={'#1f0c0cff'}
                            onPress={nextQuestion}
                        />
                    </View>
                }
            </View>


            <View style={{ backgroundColor: '#f3e9e9ff', padding: 20, margin: 60, alignItems: 'center' }}>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 19, color: '#000000ff' }}>
                        Timeout :{timeout}
                    </Text>
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 19, color: '#000000ff' }}>
                        Total Questions:{quizList.length}
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 19, color: '#000000ff' }}>
                        Score:{score}
                    </Text>
                </View>
            </View>
        </View >
    );
};

export default QuizApp;
