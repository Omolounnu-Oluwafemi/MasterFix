import {
  DarkTheme, DefaultTheme, NavigationContainer
} from "@react-navigation/native";
import RootNavigator from "./RootNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#333333",
    text: "#FFFFFF",
    background: '#000',
    border: "#444444",
  },
};

const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FFFFFF",
    text: "#013C69",
    border: "#DDDDDD",
    background: '#FFFFFF',
  },
};

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "light" ? CustomDarkTheme : CustomLightTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

