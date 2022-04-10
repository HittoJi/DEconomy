import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";

import { Ionicons } from '@expo/vector-icons';

const newSolanaWallet = () => {
    console.log("solana wallet");
}

const TopCard = ({ item }: any) => (

    <TouchableOpacity onPress={item.fun}>
        <View style={styles.card}>
            <Image style={styles.logo} source={{ uri: item.img }} />
            {/* <Text style={styles.title}>Solana wallet</Text> */}
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    card: {
        width: 70,
        height: 70,
        backgroundColor: '#708090',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    logo: {
        width: 50,
        height: 50,
    },
});

export default TopCard;