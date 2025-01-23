import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import BackButton from './../../components/BackButton';
import { Ionicons } from 'react-native-vector-icons';

const settingsOptions = [
    { label: 'Edit Profile', icon: 'person-outline', screen: 'Profile' },
    { label: 'Change Password', icon: 'shield-checkmark-outline', screen: 'ChangePassword' },
    { label: 'Allow Notification', icon: 'notifications-outline', screen: 'Notifications' },
    { label: 'Privacy', icon: 'lock-closed-outline', screen: 'Privacy' },
    { label: 'FAQs', icon: 'help-circle-outline', screen: 'FAQs' },
    { label: 'Terms & Policies', icon: 'document-text-outline', screen: 'TermsPolicies' },
    { label: 'Transactions History', icon: 'card-outline', screen: 'Transactions' },
    { label: 'Report A Problem', icon: 'flag-outline', screen: 'ReportProblem' },
    { label: 'Help & Support', icon: 'help-circle-outline', screen: 'HelpSupport' },
    { label: 'About Us', icon: 'information-circle-outline', screen: 'AboutUs' },
    { label: 'Log Out', icon: 'log-out-outline', screen: 'LogOut' },
    { label: 'Delete My Account', icon: 'trash-outline', screen: 'DeleteAccount' },
];


export default function SettingHome({ navigation }) {
    const handleNavigation = (screen) => {
        navigation.navigate(screen);
    };

    const renderSettingOption = ({ label, icon, screen }) => (
        <TouchableOpacity
          key={label}
          style={styles.field}
          onPress={() => handleNavigation(screen)}
        >
          <Ionicons name={icon} size={24} color="#013C69" />
          <Text style={styles.fieldText}>{label}</Text>
        </TouchableOpacity>
      );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >

                <View style={styles.container}>
                    <BackButton text="Home" iconPosition="left" alignSelf="flex-start" onPress={() => navigation.navigate('Home')} />
                    <Text style={styles.verifyText}>Settings</Text>
                </View>
                <View style={styles.balanceBox}>
                    <View style={styles.head}>
                        <Text style={styles.balance}>Current Balance</Text>
                        <Ionicons name="eye" size={24} color="#8E98A8" />
                    </View>
                    <Text style={styles.amount}>$27,200.00</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Deposit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {
                        backgroundColor: '#fff', borderWidth: 2, borderColor: '#eaeaea',
                    }]}>
                        <Text style={[styles.buttonText, { color: '#013C69' }]}>Transfer</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.fieldContainer}>
                    {settingsOptions.map(renderSettingOption)}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
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
        lineHeight: 42,
        textAlign: 'center',
        marginTop: '5%',
    },
    balanceBox: {
        borderRadius: 10,
        padding: 20,
        marginTop: '5%',
        borderWidth: 2,
        borderColor: '#eaeaea',
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    balance: {
        fontSize: 18,
        color: '#DE9C00',
        fontWeight: '400',
    },
    amount: {
        fontSize: 24,
        color: '#8E98A8',
        fontWeight: '700',
        marginTop: '5%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '5%',
    },
    button: {
        backgroundColor: '#013C69',
        padding: 15,
        width: '48%',
        borderRadius: 10,
        flexDirection: 'row',
    },
    buttonText: {
        color: '#f5f5f5',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        flex: 1,
    },
    fieldContainer: {
        marginTop: '5%',
        paddingBottom: '5%',
        marginBottom: '5%',
        backgroundColor: '#E9EBF8',
        borderRadius: 10,
        paddingTop: 20,
    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
    },
    fieldText: {
        fontSize: 16,
        color: '#013C69',
        fontWeight: '400',
        marginLeft: 20,
    },
});

