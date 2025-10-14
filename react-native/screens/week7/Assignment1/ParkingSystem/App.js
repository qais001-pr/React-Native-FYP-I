import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet,
    TextInput as TextRN,
    Alert
} from 'react-native';
import React, { useState } from 'react';
import { RadioButton, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function App() {
    const [radioValue, setRadioValue] = useState('Car');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [searchText, setSearchText] = useState('');

    const [parkingList, setParkingList] = useState([
        {
            icon: 'car',
            regNo: 'IDL-5091',
        },
    ]);

    const findVehicleExistsOrNot = (regno) => {
        return parkingList.find(
            (vehicle) => vehicle.regNo.toLowerCase() === regno.toLowerCase()
        );
    };

    const parkIn = () => {
        if (!registrationNumber.trim()) {
            Alert.alert('Error', 'Please enter a registration number.');
            return;
        }

        if (findVehicleExistsOrNot(registrationNumber)) {
            Alert.alert('Error', 'Vehicle already exists with this registration number.');
            return;
        }

        const charge = radioValue.toLowerCase() === 'car' ? 100 : 50;

        setParkingList((prev) => [
            ...prev,
            { icon: radioValue.toLowerCase(), regNo: registrationNumber },
        ]);
        setTotalAmount((prev) => prev + charge);
        setRegistrationNumber('');
    };

    const parkOut = (regno) => {
        const filtered = parkingList.filter(
            (v) => v.regNo.toLowerCase() !== regno.toLowerCase()
        );
        setParkingList(filtered);
    };

    const filteredList = parkingList.filter((vehicle) =>
        vehicle.regNo.toLowerCase().includes(searchText.toLowerCase())
    );

    const renderItems = ({ item }) => {
        return (
            <View
                style={{
                    padding: 15,
                    margin: 15,
                    backgroundColor: 'rgba(205, 201, 207, 1)',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderRadius: 10,
                    elevation: 5,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={item.icon} size={20} color="rgba(82, 151, 13, 1)" />
                    <Text style={{ color: 'black', fontSize: 20, marginLeft: 15 }}>
                        {item.regNo}
                    </Text>
                </View>
                <View>
                    <Button
                        title="Park Out"
                        color="rgba(122,222,22,1)"
                        onPress={() => parkOut(item.regNo)}
                    />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.safeAreaView}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Parking System</Text>
            </View>

            {/* Total Earnings */}
            <View style={styles.totalEarningBlock}>
                <Text style={styles.totalEarningText}>
                    Total Earning: Rs {totalAmount}
                </Text>
            </View>

            {/* Register Vehicle */}
            <View style={styles.registeredBlock}>
                <TextInput
                    mode="outlined"
                    label="Registration Number"
                    value={registrationNumber}
                    onChangeText={setRegistrationNumber}
                    style={styles.registeredTextInput}
                />

                {/* Radio Buttons */}
                <View style={styles.radioButtonContainer}>
                    <RadioButton.Group
                        value={radioValue}
                        onValueChange={(val) => setRadioValue(val)}
                    >
                        <View style={styles.radioRow}>
                            <View style={styles.radioOption}>
                                <RadioButton
                                    value="Car"
                                    color="rgba(20, 126, 73, 1)"
                                />
                                <Text style={styles.radioLabel}>Car</Text>
                            </View>
                            <View style={styles.radioOption}>
                                <RadioButton
                                    value="Bike"
                                    color="rgba(20, 126, 73, 1)"
                                />
                                <Text style={styles.radioLabel}>Bike</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>

                <View style={styles.parkInButton}>
                    <Button
                        title="Park In"
                        color="rgba(72, 172, 130, 1)"
                        onPress={parkIn}
                    />
                </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="rgba(10, 160, 77, 1)" />
                <TextRN
                    style={styles.searchTextInput}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Search by Registration Number"
                />
            </View>

            {/* Parking List */}
            <FlatList
                data={filteredList}
                renderItem={renderItems}
                keyExtractor={(item) => item.regNo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    header: {
        paddingTop: 35,
        paddingLeft: 15,
        paddingBottom: 13,
        backgroundColor: 'rgba(15, 164, 77, 1)',
        marginBottom: 15,
    },
    headerText: {
        fontSize: 25,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 1)',
    },
    totalEarningBlock: {
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'rgba(15,164,77,1)',
    },
    totalEarningText: {
        fontSize: 20,
        fontWeight: '800',
        color: 'rgba(15,164,77,1)',
    },
    registeredBlock: {
        margin: 20,
        padding: 15,
        borderRadius: 7,
        backgroundColor: 'rgba(232, 229, 235, 1)',
        elevation: 10,
    },
    registeredTextInput: {
        fontSize: 19,
    },
    radioButtonContainer: {
        padding: 30,
        alignItems: 'center',
    },
    radioRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
    },
    parkInButton: {
        width: '30%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        padding: 10,
        borderColor: 'rgba(10, 160, 77, 1)',
        borderWidth: 1,
        margin: 10,
    },
    searchTextInput: {
        flex: 1,
        fontSize: 19,
        fontWeight: '500',
        marginLeft: 15,
    },
});
