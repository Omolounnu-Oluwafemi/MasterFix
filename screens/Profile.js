import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import BackButton from '../components/BackButton';
import { Ionicons } from 'react-native-vector-icons';

export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <BackButton text="Settings" iconPosition="left" alignSelf="flex-start" onPress={() => navigation.goBack()} />
                <Text style={styles.verifyText}>Profile</Text>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: '5%',
        marginHorizontal: 20,
    },
    verifyText: {
        fontSize: 28,
        color: '#013C69',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: '5%',
    },
});