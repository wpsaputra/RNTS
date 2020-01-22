import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import AppNavigator from './routes';

import { ApplicationProvider, Layout, Text, Button, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    // </View>
    // <AppNavigator/>
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <AppNavigator/>
      </ApplicationProvider>
    </React.Fragment>

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
