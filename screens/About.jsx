import React, { Component } from 'react'
// import { Text, View, Button } from 'react-native'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';

export default class About extends Component {
    // static navigationOptions = {
    //     title: 'About',
    // };

    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return (
            // <View>
            //     <Text> About </Text>
            // </View>

            // <ApplicationProvider mapping={mapping} theme={lightTheme}>
            //     <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            //         <Text category='h1'>About</Text>
            //     </Layout>
            // </ApplicationProvider>
            
            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text category='h1'>About</Text>
            </Layout>
        )
    }
}
