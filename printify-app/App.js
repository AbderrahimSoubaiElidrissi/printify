import React from "react";

import { isSignedIn } from "./auth";
import Routes from "./router";
import { StyleSheet, View, StatusBar } from "react-native";

export default function App() {
  const [signedIn, setsignedIn] = React.useState(false);
  const [checkedSignIn, heckedSignIn] = React.useState(false);

  // React.useEffect(() => {
  //   isSignedIn()
  //     .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
  //     .catch(err => alert("An error occurred"));
  // }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
