import React, {useState} from 'react';
import {View, Text, Image, Button, Alert, ScrollView, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ToastAndroid} from 'react-native';

const MyApp = () => {

    // Declare variables
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('')

    // Function to check answers
    const checkAnswers = () => {
        let score = 0;
        if (ans1 == 'BeuTea') {
            score = score + 1;
        }
        if (ans2 == 'Chagee') {
            score = score + 1;
        }
        if (ans3 == 'Molly Tea') {
            score = score + 1;
        }
        ToastAndroid.show(
            'You have ' + score + ' correct answers!',
            ToastAndroid.SHORT
        );
    };

    return (
        <ScrollView>
            <View>
                <Text></Text>
                <Text></Text>
                <Text style={{fontSize: 25, textAlign: 'center'}}>
                    Milk Tea Brand Quiz
                </Text>
                {/* Question 1: Molly Tea */}
                <Text>What Milk Tea Brand is this?</Text>
                <Picker
                    selectedValue={ans3}
                    onValueChange={(value) => setAns3(value)}>
                    <Picker.Item label="Select an item..." value=""/>
                    <Picker.Item label="BeuTea" value="BeuTea"/>
                    <Picker.Item label="Chagee" value="Chagee"/>
                    <Picker.Item label="Molly Tea" value="Molly Tea"/>
                </Picker>
                <TouchableOpacity onPress={() => Alert.alert('Hint:', 'Molly Tea')}>
                    <Image
                        source={{
                            uri: 'https://danielfooddiary.com/wp-content/uploads/2026/05/Molly-Tea-at-Orchard-Central-Singapore-for-Jasmine-Milk-Tea-and-Tea-Based-Drinks.jpg'
                        }}
                        style={{width: 400, height: 300}}/>
                </TouchableOpacity>
                <Text></Text>

                {/* Question 2: BeuTea */}
                <Text>What Milk Tea Brand is this?</Text>
                <Picker
                    selectedValue={ans1}
                    onValueChange={(value) => setAns1(value)}>
                    <Picker.Item label="Select an item..." value=""/>
                    <Picker.Item label="BeuTea" value="BeuTea"/>
                    <Picker.Item label="Chagee" value="Chagee"/>
                    <Picker.Item label="Molly Tea" value="Molly Tea"/>
                </Picker>
                <Text></Text>
                <TouchableOpacity onPress={() => Alert.alert('Hint:', 'BeuTea')}>
                    <Image source={{
                            uri: 'https://greatnewplaces.com/wp-content/uploads/2025/06/GNP-Headline-Beuteajunction8.jpg'
                        }}
                        style={{width: 400, height: 300}}
                    />
                </TouchableOpacity>
                <Text></Text>

                {/* Question 3: Chagee */}
                <Text>What Milk Tea Brand is this?</Text>
                <Picker
                    selectedValue={ans2}
                    onValueChange={(value) => setAns2(value)}>
                    <Picker.Item label="Select an item..." value=""/>
                    <Picker.Item label="BeuTea" value="BeuTea"/>
                    <Picker.Item label="Chagee" value="Chagee"/>
                    <Picker.Item label="Molly Tea" value="Molly Tea"/>
                </Picker>
                <TouchableOpacity onPress={() => Alert.alert('Hint:', 'Chagee')}>
                    <Image source={{
                        uri: 'https://tse3.mm.bing.net/th/id/OIP.keHfunAYwHxiyIz8Hw4e6QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
                    }}
                           style={{width: 400, height: 300}}/>
                </TouchableOpacity>
                <Text></Text>

                {/* Submit Answers Button */}
                <Button title="Submit Answer" onPress={checkAnswers}/>
                <Text></Text>
                <Text></Text>
                <Text></Text>

            </View>
        </ScrollView>
    );
};

export default MyApp;