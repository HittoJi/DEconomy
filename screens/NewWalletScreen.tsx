import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, FlatList, Modal } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import axios from 'axios';

export default function NewWalletScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const numColumnas = 4;

    const serverAddres = "http://81.202.37.102:3000"
    const newBitcoinWallet = () => {
        axios.get(serverAddres + `/api/new-btc-wallet`)
            .then(res => {
                if (res.status == 200) {
                    openWindowNewWallet(res.data);
                } else {
                    console.log("get data fall");
                }
            });
    }

    const newSolanaWallet = () => {
        console.log("solana wallet");
    }


    // const openWindowNewWallet = (obj: Object) => {
    //     navigation.navigate('NewWalletInfo', {
    //         obj: obj,
    //     });
    // }
    const [menus, setReviews] = useState([
        { key: '1', label: "Bitcoin", img: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579', fun: newBitcoinWallet, service: "/api/new-btc-wallet" },
        { key: '2', label: "Solana", img: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422', fun: newSolanaWallet },
        { key: '3', label: "Cardano", img: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860', fun: newSolanaWallet },
        { key: '4', label: "Polkadot", img: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644', fun: newSolanaWallet },
    ]);
    return (
        <View style={styles.container}>

            <View style={styles.list}>
                <FlatList
                    data={menus}
                    numColumns={numColumnas}
                    scrollEnabled={false}
                    renderItem={({ item }) => {
                        return <View style={styles.icon}>
                            <TouchableOpacity
                                onPress={item.fun}>
                                <View style={styles.card}>
                                    <Image style={styles.logo} source={{ uri: item.img }} />
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.label}>{item.label}</Text>
                        </View>
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    //-------POPWINDOW
    popWindow: {
        width: '70%',
        height: 'auto',
        backgroundColor: 'red',
        zIndex: 1,
    },
    ///----------------------------------
    list: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    icon: {
        alignItems: 'center',
    },
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
        borderRadius: 50,
    },
    label: {
        fontSize: 12,
        marginTop: -5,
    },
    //---------------------------------
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
