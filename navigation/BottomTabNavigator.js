import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme, StyleSheet } from "react-native";
import { Ionicons, FontAwesome6 } from 'react-native-vector-icons';
import { useTheme } from "@react-navigation/native"; 

import Colors from "../constants/Colors";
import HomeScreen from "../screens/Home/Home";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,  
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color}) => (
            <TabBarIcon
              name="home-outline"
              color={color}
            />    
          ),
        }}
      />
      <BottomTab.Screen
        name="Bookings"
        component={BookingsStack}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="pen-to-square" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={FavouriteStack}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="bookmark-outline"
              color={color}
            />  
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingStack}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="settings-outline"
              color={color}
            />  
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
  return <Ionicons size={25} style={{ marginBottom: -3 }} {...props} />;
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function FavouriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </Stack.Navigator>
  );
}

function BookingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bookings"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const getStyles = (colors) => StyleSheet.create({
  tabBar: {
    height: 70,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },
});
