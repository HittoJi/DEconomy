import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, FlatList } from 'react-native';

import Info from '../../components/Wallet/NewWalletInfo';
import { View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';



export default function NewWalletInfo({ route }: RootTabScreenProps<'TabContDetails'>) {
    const { obj }: any = route.params;
    return (
        // <ScrollView>
        <View style={styles.container}>
            <FlatList
                data={obj}
                scrollEnabled={false}
                renderItem={({ item }) => {
                    return <Info item={item} />
                }}
            />
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
        // </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 15,
        // backgroundColor: '#212020',
        width: '100%',
        textAlign: 'center',
        padding: 5,
        // color: 'white'
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
    qrImg: {
        // width: 120,
        // height: 120,
    },
});
