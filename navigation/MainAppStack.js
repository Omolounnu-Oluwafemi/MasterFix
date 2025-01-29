import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";
import SideBar from "./../components/SideBar"

const Drawer = createDrawerNavigator();

export default function MainAppStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeScreen" component={BottomTabNavigator} />
      <Drawer.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Drawer.Navigator>
  );
}