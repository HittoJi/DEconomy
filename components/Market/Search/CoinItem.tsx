import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }: any) => (
    <View style={styles.container}>
        <Image source={{ uri: coin.thumb }} style={styles.image} />
        <View style={styles.nameContainer}>
            <Text style={styles.coinName}>{coin.name}</Text>
            <Text style={styles.coinSymbol}>{coin.symbol}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    nameContainer: {
        marginLeft: 10,
    },
    coinName: {
        fontSize: 20,
        color: 'white',
    },
    coinSymbol: {
        fontSize: 15,
        color: 'gray',
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 100,
    },
});

export default CoinItem;