import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Clipboard } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';


const Info = ({ item }: any) => (

    <View style={styles.infoContainer} >
        <Text style={styles.title}>{item.label}</Text>
        <QRCode value={item.data} />
        <TouchableOpacity onPress={() => {
            console.log("Gola");
        }}>
            <Text style={styles.desciption}>{item.data}<AntDesign name="copy1" size={24} color="black" selectable={true}/></Text>
        </TouchableOpacity>
    </View >
);

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        width: '100%',
        textAlign: 'center',
        padding: 5,
    },
    desciption: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
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