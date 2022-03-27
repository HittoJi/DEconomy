import React, { useEffect, useState } from 'react'
import axios from "axios";
import { StyleSheet, FlatList, Text } from 'react-native';
import CharCard from '../components/CharCard';


const Top10Coints = ({ topCoint, navigation }) => (

    <FlatList
        data={topCoint}
        horizontal
        showsHorizontalScrollIndicator={true}
        renderItem={({ item }) => {
            return <CharCard coin={item} navigation={navigation} />
        }}
    />
);

const styles = StyleSheet.create({
    top10: {
        marginTop: 15,
        fontSize: 25,
        color: 'white',
    },
});

export default Top10Coints;