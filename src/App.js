import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Platform,
  Vibration,
  View,
  Text,
  Button,
  Linking,
  SafeAreaView,
} from 'react-native';
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

  // useEffect(() => {
  //   Contacts.getPermissions();
  // }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Testing this bad boi</Text>
        <Button onPress={triggerVibrate} title="Trigger Vibration">
          Buzz Buzz
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    marginTop: 25,
  },
});

export default App;
