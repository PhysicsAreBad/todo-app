import React from 'react';
import { ScrollView, Text } from 'react-native';

import firestore from '@react-native-firebase/firestore';
import { Appbar, TextInput, Button } from 'react-native-paper';

function Todos() {
    const ref = firestore().collection("todos");

    return (
        <>
            <Appbar>
                <Appbar.Content title={`ToDo List`} />
            </Appbar>
            <ScrollView style={{flex: 1}}>
                <Text>Things to do!</Text>
            </ScrollView>
            <TextInput label={"New ToDo"} onChangeText={() => {}} />
            <Button onPress={() => {}}>Add ToDo</Button>
        </>
    );
}

export default Todos;