import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Platform,
  Vibration,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import {
  Divider,
  Button,
  Title,
  Subheading,
  Appbar,
  Avatar,
} from 'react-native-paper';
import Header from './components/Header';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';
// import * as Location from 'expo-location';

const Separator = () => <View style={styles.separator} />;

const App = props => {
  const [permissions, setPermissions] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    setPermissions(true);
  };

  const singleVibrate = () => {
    Vibration.vibrate();
  };

  const multiVibrate = () => {
    let pattern = [750, 750, 750];
    Vibration.vibrate(pattern);
  };

  const toggleVibrate = () => {
    Vibration.cancel();
  };

  const continuousVibrate = () => {
    setIsVibrating(true);
    let pattern = [500, 500, 500];
    Vibration.vibrate(pattern, true);
  };

  useEffect(() => {
    getPermissions();
  }, []);

  if (!permissions) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text syle={styles.title}>Still need permission!</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Separator />
        <Button
          icon="ladybug"
          color="black"
          style={styles.button}
          onPress={singleVibrate}
          title="Buzz"
        >
          Buzz
        </Button>
        <Separator />
        <Button
          color="black"
          icon="ladybug"
          style={styles.button}
          onPress={multiVibrate}
          title="Buzz Buzz Buzz"
        >
          Buzz Buzz Buzz
        </Button>
        <Separator />
        <Button
          color="black"
          icon="ladybug"
          style={styles.button}
          onPress={continuousVibrate}
          title="Buzzzzzzzzzzz"
        >
          Buzzzzzzzzzzz
        </Button>
        <Separator />
        <Button
          color="black"
          icon="close-circle"
          style={styles.button}
          onPress={toggleVibrate}
          title="That's Enough"
        >
          That's Enough
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 15,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'gold',
    color: 'black',
    justifyContent: 'center',
    marginTop: 25,
    padding: 25,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 'StyleSheet.hairlineWidth',
  },
});

export default App;
