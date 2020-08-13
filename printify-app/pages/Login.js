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

import Axios from "axios";
import { Actions } from "react-native-router-flux";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  handleLogin = async () => {
    const req = await Axios.get("https://jsonplaceholder.typicode.com/users/1");
    const user = req.data;
    console.log(email, password);
    if (user == null) {
      Alert.alert("Unauthorized", "Wrong Username / Password");
      return;
    } else {
      AsyncStorage.setItem("user", JSON.stringify(user));
      Actions.home(user);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Printify</Text>

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

      <TouchableOpacity onPress={() => Actions.reset()}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  }
});
