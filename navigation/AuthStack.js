import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/Welcome/SplashScreen";
import LandingPage from "../screens/Welcome/Landing";
import Register from "../screens/Auth/Register/Register";
import VerifyPhone from "../screens/Auth/Register/VerifyPhone";
import ConfirmPhone from "../screens/Auth/Register/ConfirmPhone";
import AccountType from "../screens/Auth/Register/AccountType";
import ArtisanDetails from "../screens/Auth/Register/ArtisanDetails";
import UserDetails from "../screens/Auth/Register/UserDetails";
import Home from "../screens/Home/Home"

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LandingPage" component={LandingPage}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
      <Stack.Screen name="ConfirmPhone" component={ConfirmPhone} />
      <Stack.Screen name="AccountType" component={AccountType} />
      <Stack.Screen name="ArtisanDetails" component={ArtisanDetails} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
      <Stack.Screen name="HomeScreen" component={Home} />
      {/* Add more auth/onboarding screens here */}
    </Stack.Navigator>
  );
}
