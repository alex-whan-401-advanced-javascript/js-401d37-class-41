import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Subheading, Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <>
      <Title style={styles.title}>Bumblebee Simulator</Title>
      <View>
        <Avatar.Image
          size={64}
          source={require('../assets/bumblebee-logo2.png')}
        />
      </View>
      <Subheading style={styles.title}>Choose your pattern!</Subheading>
    </>
  );
};

export default Header;

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
});
