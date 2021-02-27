import React from "react";
import { isSignedIn } from "./auth";
import {AuthState} from './context/auth/authState'
import Routes from "./router";
import { StyleSheet, View, StatusBar } from "react-native";

export default function App() {
  const [signedIn, setsignedIn] = React.useState(false);
  const [checkedSignIn, heckedSignIn] = React.useState(false);

  

  return (
    <AuthState>
    <View style={styles.container}>
      <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
      <Routes />
    </View>
    </AuthState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
