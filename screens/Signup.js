import React, {useState, useEffect} from 'react';
import{
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { authentication } from '../firebase/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import FlatButton from '../shared/button';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const UsersList = collection(db, "userlist");

  const navigation = useNavigation();

  
    const signUpUser = async ()=>{
      if (password !== confirmpassword) {
        alert("Password not Match");
      } else {
        try {
          await createUserWithEmailAndPassword(authentication, email, password);
          await addDoc(UsersList, {
            lastname: lastname,
            firstname: firstname,
            email: email,
            password: password,
          });
        } catch (error) {
          alert(error);
        }
      }
  
    }

    useEffect(() => {
      const unsubscribe = authentication.onAuthStateChanged((user) => {
        if (user) {
          navigation.navigate("Home");
        }
      });
      return unsubscribe;
    }, []);
  
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}>A-61</Text>
        <TextInput style={styles.input} placeholder='Lastname' value={lastname} onChangeText={text=>setLastname(text)}/>
        <TextInput style={styles.input} placeholder='Firstname' value={firstname} onChangeText={text=>setFirstname(text)}/>
        <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={text=>setEmail(text)}/>
        <TextInput style={styles.input} placeholder='Password' value={password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
        <TextInput style={styles.input} placeholder='Confirm Password' value={confirmpassword} secureTextEntry={true} onChangeText={text=>setConfirmpassword(text)}/>
        <FlatButton text='Sign up' onPress={signUpUser}/>
  
        <TouchableOpacity>
          
          <Text onPress={()=> navigation.navigate("SignIn")} style={styles.signup}>
           Already have account? Sign In
          </Text>
        </TouchableOpacity>
  
      </View>
    );
}

export default Signup;

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
  }
  
  });