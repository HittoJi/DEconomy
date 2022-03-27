import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, SafeAreaView, ScrollView, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

// import ReadMore from '../components/ReadMore';
import ReadMore from '@fawazahmed/react-native-read-more';





// export default function CointDetailsScreen({ route, navigation }) {
export default function CointDetailsScreen({ route }) {
    const { coinId } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [readMore, setReadMore] = useState(false);
    const [coint, setCoint] = useState(
        {
            name: "", market_cap_rank: "", current_price: "", webSite: "",
            ath: "", ath_change_percentage: "", ath_date: "", market_cap: "",
            description: "",
        });

    const loadCoint = () => {
        setIsLoading(true);

        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
            .then(res => {
                if (res.status == 200) {
                    coint.name = res.data.name;
                    coint.description = res.data.description.en;
                    coint.market_cap_rank = res.data.market_cap_rank;
                    coint.webSite = res.data.links.homepage[0];
                    coint.current_price = res.data.market_data.current_price.usd;
                    coint.ath = res.data.market_data.ath.usd;
                    coint.ath_change_percentage = res.data.market_data.ath_change_percentage.usd;
                    coint.ath_date = res.data.market_data.ath_date.usd;
                    let cosas = new Date(coint.ath_date)
                    coint.ath_date = cosas.getDay() + "/" + cosas.getMonth() + "/" + cosas.getFullYear() + " - " + cosas.getMinutes() + ":" + cosas.getHours();
                    coint.market_cap = res.data.market_data.market_cap.usd;
                    //--Add more market_data


                    //------------
                    setIsLoading(false);
                    console.log("---------");
                    console.log(coint);
                } else {
                    console.log("get data fall");
                }
            });
    }
    useEffect(() => {
        loadCoint();
    }, []);

    // React.useLayoutEffect(() => {
    //     navigation.setOptions({
    //         title: "#" + coint.market_cap_rank + " " + coint.name,
    //         // tabBarIcon: <Ionicons name="ios-stats-chart" size={18}/>
    //     });
    // });
    const dollarUSLocale = Intl.NumberFormat('en-US');

    const onPressLearnMore = () => {
        console.log("read more");

    }
    return (
        <View style={styles.container}>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            <View style={styles.topInfo}>
                <Text style={styles.coinName}>{coint.name}</Text>
                <Text style={styles.cointPrice}>{dollarUSLocale.format(coint.current_price)}US$</Text>
            </View>
            <View>
                <Image style={styles.cointLogo} source={{ uri: "https://cdn.statcdn.com/Statistic/1060000/1061031-blank-754.png" }} />
            </View>

            {/* <SafeAreaView style={styles.containerT}>
                <ScrollView style={styles.scrollView}>
                    <ReadMore numberOfLines={3} style={styles.textStyle} seeMoreContainerStyleSecondary={undefined}>
                        {coint.description}
                    </ReadMore>
                </ScrollView>
            </SafeAreaView> */}

            {/* <View style={styles.separator} lightColor="#eee" darkColor="#708090" />
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
            </View> */}

            <View style={[readMore ? styles.desplegableOff : styles.desplegableOn]}>
                <ScrollView>
                    <Text style={styles.textStyle}>
                        {coint.description}
                    </Text>
                </ScrollView>
                <View style={styles.readMoreIcon}>
                    <MaterialIcons name="unfold-more" size={40} color="blue"
                        onPress={() => {
                            readMore ?
                                setReadMore(false) :
                                setReadMore(true);
                        }} />
                </View>
            </View>
        </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    );
}

const styles = StyleSheet.create({

    //----------------------------
    desplegableOff: {
        width: '100%',
        height: 200,
        backgroundColor: '#708090',
    },
    desplegableOn: {
        width: '100%',
        height: 35,
        backgroundColor: '#708090',
    },
    btnReadMore: {
        backgroundColor: 'yellow',
        color: 'white',
    },
    //Temp------------------------
    cointLogo: {
        width: 400,
        height: 250
    },
    separator: {
        marginVertical: 10,
        height: 1,
        width: '90%',
    },
    containerT: {
        height: 60,
    },
    textStyle: {
        fontSize: 20,
    },
    scrollView: {
        width: '100%',
        backgroundColor: '#708090',
    },
    //-------

    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    //------Views-----------
    topInfo: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#708090',
    },
    readMoreIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'flex-end',

    },
    //------ITEMS-----------
    coinName: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginLeft: 15,
    },
    cointPrice: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        marginLeft: 15,
    },
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
