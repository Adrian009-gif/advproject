import React, {useEffect, useState} from 'react';
import{
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { authentication } from '../firebase/firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import SigninButton from '../shared/SignInButton';

const SignIn = () => {

  const [isSignedIn,setIsSignedIn] = useState(false);

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigation = useNavigation();

  const SignInUser = () => {
    signInWithEmailAndPassword(authentication,email,password)
    .then((re)=>{
      setIsSignedIn(true);
    })
    .catch((re)=>{
      console.log(re);
    })

  }

  return(
    <View style={styles.container}>
      <Text style={styles.titleText}>A-61
        {"\n"}</Text>
      <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={text=>setEmail(text)}/>
      <TextInput style={styles.input} placeholder='Password' value={password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
      <SigninButton text='Sign in' onPress={SignInUser}/>

      <TouchableOpacity>
          
          <Text onPress={()=> navigation.navigate("Signup")} style={styles.signup}>
          Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>

    </View>
  );
};


export default SignIn;


const styles = StyleSheet.create({
  container: {
    marginTop: 60,
      padding: 24,
      width: "100%",
      display: "flex",
      justifyContent: "center",
  },
  titleText: {
    fontSize: 80,
    fontWeight: "bold"
  },
  button: {
    height: 40,
    marginTop: 120,
    margin: 12,
    padding: 12,
    color: "black",
    backgroundColor: "#000000",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#000000',
    borderRadius: 15, 
    fontSize: 16,
  },
  signup: {
    marginTop: 15,
    textAlign: 'center'
  },

});