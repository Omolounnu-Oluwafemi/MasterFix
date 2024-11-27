import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/Welcome/SplashScreen";
import LandingPage from "../screens/Welcome/Landing";
import Register from "../screens/Auth/Register/Register";
import VerifyPhone from "../screens/Auth/Register/VerifyPhone";
import ConfirmPhone from "../screens/Auth/Register/ConfirmPhone";
import AccountType from "../screens/Auth/Register/AccountType";
import ArtisanDetails from "../screens/Auth/Register/ArtisanDetails";
import UserDetails from "../screens/Auth/Register/UserDetails";
import WelcomeBack from "../screens/Auth/Login/WelcomeBack";
import VerificationChoice from "../screens/Auth/Login/VerificationChoice";
import VerifyCode from "../screens/Auth/Login/VerifyCode";
import NewPassword from "../screens/Auth/AccountRecovery/NewPassword";
import RecoveryCode from "../screens/Auth/AccountRecovery/RecoveryCode";
import ResetPassword from "../screens/Auth/AccountRecovery/ResetPassword";
import ResetSuccess from "../screens/Auth/AccountRecovery/ResetSuccess";
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
      <Stack.Screen name="WelcomeBack" component={WelcomeBack} />
      <Stack.Screen name="VerificationChoice" component={VerificationChoice} />
      <Stack.Screen name="VerifyCode" component={VerifyCode} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="RecoveryCode" component={RecoveryCode} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="ResetSuccess" component={ResetSuccess} />
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
}
