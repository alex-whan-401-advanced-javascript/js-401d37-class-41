import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  Platform,
  Vibration,
  View,
  Text,
  Button,
  Linking,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Header from './Header';
import MapComponent from './MapComponent';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

const App = props => {
  const [permissions, setPermissions] = useState(false);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    setPermissions(true);
  };

  const triggerVibrate = () => {
    Vibration.vibrate();
  };

  const showMap = () => {
    return <MapComponent />;
  };

  // useEffect(() => {
  //   Contacts.getPermissions();
  // }, []);

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Text>Testing this bad boi</Text>
        <Button onPress={triggerVibrate} title="Trigger Vibration">
          Buzz Buzz
        </Button>
        <Button onPress={showMap} title="Show Map">
          Show Map
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'pink',
    justifyContent: 'center',
    marginTop: 25,
  },
});

export default App;
