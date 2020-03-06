import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

function About(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>PAGE ABOUT</Text>
    </View>
  );
}


export default About;
