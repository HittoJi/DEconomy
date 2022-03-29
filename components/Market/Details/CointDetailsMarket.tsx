import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';

const dollarUSLocale = Intl.NumberFormat('en-US');

const CointDetailsMarket = ({ coint }) => (
    

    <View style={styles.general}>
        <View style={styles.generalInfo}>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>Market Cap</Text>
                <Text style={styles.generalInfoItemBottom}>{dollarUSLocale.format(coint.market_cap)}</Text>
            </View>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>All Time High</Text>
                <Text style={styles.generalInfoItemBottom}>{dollarUSLocale.format(coint.ath)}</Text>
            </View>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>All Time High Day</Text>
                <Text style={styles.generalInfoItemBottom}>{(coint.ath_date)}</Text>
            </View>
        </View>
        <View style={styles.generalInfo}>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>All Time High Data</Text>
                <Text style={styles.generalInfoItemBottom}>{dollarUSLocale.format(coint.market_cap)}</Text>
            </View>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>Market Cap</Text>
                <Text style={styles.generalInfoItemBottom}>{dollarUSLocale.format(coint.market_cap)}</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    general: {
        backgroundColor: 'yellow',
        // flexDirection: 'row',
        // justifyContent: 'space-between',

    },
    generalInfo: {
        backgroundColor: '#708090',
    },
    generalInfoItem: {
        // backgroundColor: 'yellow',
    },
    generalInfoItemTop: {
        fontSize: 15,
        color: 'grey',
    },
    generalInfoItemBottom: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
    },
});

export default CointDetailsMarket;