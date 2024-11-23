import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/Welcome/SplashScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import LandingPage from "../screens/Welcome/Landing";
import EditScreen from "../components/EditScreenInfo"

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LandingPage" component={LandingPage}/>
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="EditScreen" component={EditScreen} />
      {/* Add more auth/onboarding screens here */}
    </Stack.Navigator>
  );
}
