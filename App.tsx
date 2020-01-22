import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import AppNavigator from './routes';

import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    // </View>
    // <AppNavigator/>

    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <AppNavigator/>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
