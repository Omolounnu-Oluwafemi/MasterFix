import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppStack from "./MainAppStack";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Auth Screens */}
      <Stack.Screen name="Auth" component={AuthStack} />

      {/* Main App Screens */}
      <Stack.Screen name="Main" component={MainAppStack} />
    </Stack.Navigator>
  );
}