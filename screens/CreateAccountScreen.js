import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function CreateAccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Create an Account</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.replace("Main")} // Navigate to MainAppStack
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});