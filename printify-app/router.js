import React from "react";

import { Router, Stack, Scene, Tabs } from "react-native-router-flux";

import Reset from "./pages/Reset";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { StyleSheet, View, PixelRatio, Text } from "react-native";
import Scanned from "./pages/Scanned";
import showDocument from "./pages/Show-document";
import newDocument from "./pages/New-document";
// import Profile from "./screens/Profile";
import Icon from 'react-native-vector-icons/FontAwesome';

class TabIcon extends React.Component {
  render() {
    var color = this.props.selected ? '#00f240' : '#301c2a';

    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
        <Icon style={{ color: color }} name={this.props.iconName || "circle"} size={18} />
      </View>
    );
  }
}

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene key="reset" component={Reset} title="Reset" />
          <Scene key="showDocument" component={showDocument} title="Details" />
          <Scene key="newDocument" component={newDocument} title="New" />

          <Tabs
            swipeEnabled
            type="replace"
            key="home"
            back
            wrap={false}
            tabs={true} tabBarStyle={styles.tabBar}
            lazy
            hideNavBar={true}

          >
            <Scene key="overview" title="Documents" component={Home}
              back={false}
              icon={TabIcon}
              hideNavBar={true}
              iconName="newspaper-o"
              initial={true}

            />
            <Scene key="Queue" component={Scanned} title="Queue"
              back={false}
              icon={TabIcon}
              hideNavBar={true}
              iconName="list-ol"

            />
            <Scene key="Finish" component={Scanned} title="Profile"
              back={false}
              icon={TabIcon}
              hideNavBar={true}
              iconName="gear"

            />
          </Tabs>

        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    borderTopColor: 'darkgrey',
    borderTopWidth: 1 / PixelRatio.get(),
    backgroundColor: 'ghostwhite',
    opacity: 0.98
  }
});
