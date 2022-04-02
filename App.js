import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import Signup from "./screens/Signup";
const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App