import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

// import bitcoin from 'bitcoinjs-lib';
import pepe from '../dist/bundle';

export default function NewWalletScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    const newWallet = () => {
        const cosas = pepe.bip32;
        console.log("new w file"+cosas);
        console.log("hey is my ");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} onPress={newWallet}>Creact ur wallet :)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
