import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const logo = require('./../assets/images/MasterfixLOGO.png');


const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [openDropdown, setOpenDropdown] = useState('');
  const navigation = useNavigation();

  const menuItems = [
    { label: 'Home', icon: <MaterialIcons name="home" size={24} color="white" />, screen: 'HomeScreen', dropdown: true },
    { label: 'Admin Dashboard', icon: <FontAwesome name="dashboard" size={24} color="#bdbdbd" />, dropdown: true },
    { label: 'Inventory', icon: <FontAwesome name="archive" size={24} color="#bdbdbd" />, dropdown: true },
    { label: 'Sold', icon: <FontAwesome name="shopping-cart" size={24} color="#bdbdbd" />, dropdown: true },
    { label: 'Verification Status', icon: <FontAwesome name="shield" size={24} color="#bdbdbd" />, dropdown: true },
];

  return (
    <View style={styles.sidebar}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              style={[
                styles.menuItem,
                activeMenu === item.label && styles.activeMenuItem,
              ]}
              onPress={() => {
                setActiveMenu(item.label);
                if (item.dropdown) {
                  setOpenDropdown(openDropdown === item.label ? '' : item.label);
                }
              }}
            >
              <View style={styles.menuIcon}>{item.icon}</View>
              <Text
                style={[
                  styles.menuText,
                  activeMenu === item.label && styles.activeMenuText,
                ]}
              >
                {item.label}
              </Text>
              {item.dropdown && (
                <MaterialIcons
                  name={openDropdown === item.label ? 'expand-less' : 'expand-more'}
                  size={20}
                  color={activeMenu === item.label ? '#0C4085' : '#bdbdbd'}
                />
              )}
            </TouchableOpacity>

            {/* Dropdown Submenu */}
            {item.dropdown && openDropdown === item.label && (
              <View style={styles.dropdown}>
                <Text style={styles.dropdownText}>Submenu 1</Text>
                <Text style={styles.dropdownText}>Submenu 2</Text>
              </View>
            )}
          </View>
        ))}
      </View>

      {/* User Profile */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Anita David</Text>
        <MaterialIcons name="more-vert" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    // backgroundColor: '#1A3E72',
    backgroundColor: '##FFFFFF',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  logoContainer: {
    marginTop: 0,
    alignItems: 'center',
    // backgroundColor: 'red',
    height: 200
  },
  logo: {
    width: '70%',
    height: '80%',
    marginTop: 30,
    alignSelf: 'center', 
    resizeMode: 'contain',
    // transform: [{ rotate: '1.63deg' }],
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    color: '#bdbdbd',
    fontSize: 16,
  },
  activeMenuItem: {
    backgroundColor: '#2F7FEF4D',
    borderRadius: 8,
  },
  activeMenuText: {
    color: '#0C4085',
  },
  dropdown: {
    paddingLeft: 60,
    paddingTop: 5,
  },
  dropdownText: {
    color: '#bdbdbd',
    fontSize: 14,
    paddingVertical: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0C4085',
    borderRadius: 8,
    marginHorizontal: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
});

export default Sidebar;