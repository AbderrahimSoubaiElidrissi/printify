import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from "react-native";

import { Actions } from "react-native-router-flux";
import {useAuth} from '../context/auth/authState'

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  handleLogin = async () => {
    const { error,signIn} = useAuth();
     signIn(email,password);
    if(error)
     { Alert.alert(err.response.data.message, "Wrong Username / Password");
  }
   else{ Actions.home(user);}
     
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Printify</Text>
      <Text style={styles.greeting}>Welcome, Signup to get started</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholder="Enter User name/Email"
          placeholderTextColor="rgba(255,255,255,0.8)"
          keyboardType="email-address"
          returnKeyType="next"
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="password..."
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="go"
          autoCorrect={false}
          onChangeText={text => setPassword(text)}
        />
      </View>

      

      <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.others}>
      <TouchableOpacity onPress={() => Actions.reset()}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(249, 250, 251)",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "rgb(79, 70, 229)",
    marginBottom: 20
  },
  greeting: {
    fontWeight: "bold",
    fontSize: 20,
    color: "rgb(79, 70, 229)",
    marginBottom: 40
  },

  inputView: {
    width: "80%",
    borderRadius:10,
    height: 50,
marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    color:"rgb(31,41,55)",
    backgroundColor:"white",
    elevation:2
  },
  inputText: {
    height: 50,
    color:"rgb(31,41,55)",
  
  },
  
  loginBtn: {
    width: "80%",
    backgroundColor: "rgb(79, 70, 229)",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    color:"#000",
    fontWeight:"900"

  },
  loginText:{
    
  },
  signupText:{
    textDecorationLine:"underline"
  },
  others:{
    width:"80%",
    flexDirection:'row',
    justifyContent:"space-between",
    fontWeight:"500"
  }
});
