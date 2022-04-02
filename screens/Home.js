import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { authentication } from "../firebase/firebase-config";

const Home = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    authentication
      .signOut()
      .then(() => {
        navigation.replace("SignIn");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View>
      <Text>This is Home Screen</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home