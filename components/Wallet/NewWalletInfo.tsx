import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Clipboard } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';


const Info = ({ item }: any) => (

    <View style={styles.infoContainer} >
        <Text style={styles.title}>{item.label}</Text>
        <QRCode value={item.data} />
        <TouchableOpacity onPress={() => {
            Clipboard.setString(item.data);
        }}>
            <Text style={styles.desciption}>{item.data}<AntDesign name="copy1" size={24} color="gray" selectable={true}/></Text>
        </TouchableOpacity>
    </View >
);

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        width: '100%',
        textAlign: 'center',
        padding: 5,
        color: 'gray',
    },
    desciption: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        color: 'gray',
    },
    infoContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    infoCopy: {
        backgroundColor: 'red',
        flexDirection: 'row',
    },
});

export default Info;