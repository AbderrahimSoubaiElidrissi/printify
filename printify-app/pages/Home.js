import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { SearchBar, ListItem, Icon, Badge } from 'react-native-elements'
import { Actions } from "react-native-router-flux";


export default function Home(props) {


  const [dataSource, setDataSource] = useState(
    [
      {
        id: '1',
        name: 'Resume',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        status: 'Printed',

        subtitle: 'My super resume'
      },
      {
        id: '2',
        name: 'Certification',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        status: 'Printed',

        subtitle: 'My aWS ceritifcation vocher'
      }, {
        id: '3',
        name: 'BigData',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'My scholl report',
        status: 'In Queue',
      }
    ]
  );

  const renderItem = ({ item }) => {

    return (

      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        onPress={() => getListViewItem(item)}
        badge={{
          value: item.status,
          status: item.status === 'Printed' ? 'success' : 'warning'
        }}
        leftIcon={() => <Icon
          name='file-text'
          type='font-awesome'
          color='#00aced'
        />}
        bottomDivider
        chevron
      />
    );
  };
  //handling onPress action  
  const getListViewItem = (document) => {
    Actions.showDocument({ document });
  }

  const ItemSeparatorComponent = () => (
    <View style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }} />

  );
  const ListHeaderComponent = () => (
    <SearchBar placeholder="Type Here..." lightTheme round />
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListHeaderComponent={ListHeaderComponent}
      />
      <TouchableOpacity onPress={() => Actions.newDocument()} style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
    margin: 5,
    backgroundColor: 'white',
    height: 80,
    justifyContent: 'space-around',
    paddingLeft: 10,
    elevation: 1
  },
  separator: {
    height: 0.5, width: "100%", backgroundColor: "#000"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  }
});
