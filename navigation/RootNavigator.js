import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppStack from "./MainAppStack";
import SuccessPage from './../components/Success'

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Auth Screens */}
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="SuccessPage" component={SuccessPage} />


      {/* Main App Screens */}
      <Stack.Screen name="Main" component={MainAppStack} />
    </Stack.Navigator>
  );
}