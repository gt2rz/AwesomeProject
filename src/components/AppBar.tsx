import React from 'react';
import {View, StyleSheet} from 'react-native';
import StyleText from './StyledText';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyleText fontWeight="bold" style={styles.text}>
        Repositories
      </StyleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#f00',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
    backgroundColor: 'none', // This is needed for iOS
  },
});

export default AppBar;
