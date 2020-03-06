import React from 'react';
import { StyleSheet, View, Text,Button} from 'react-native';

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
  button:{
    fontSize: 14,
    backgroundColor: '#54C8FF'
  }
});

function Main({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEMPLATE REACT NATIVE</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
        style={styles.button}
      />
    </View>
  );
}

export default Main;
