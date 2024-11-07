import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const Exercise = () => {
  return (
    <View style={styles.parent}>
        <View style={[styles.child, {backgroundColor: 'lightblue'}]}>
            <Text>Square 1</Text>
        </View>

        <View style={[styles.child, {backgroundColor: 'lightgreen'}]}>
            <Text>Square 2</Text>
        </View>

        <View style={[styles.child, {backgroundColor: 'red'}]}>
          <Text>Square 3</Text>
        </View>
    </View>
  );
};
export default Exercise;

const styles = StyleSheet.create({
  parent: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'whitesmoke',
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center'
  },
  child: {
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center'
  }
});
