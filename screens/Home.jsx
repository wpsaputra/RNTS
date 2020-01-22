import React, { Component } from 'react'
// import { Text, View, Button } from 'react-native'

import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';

export default class Home extends Component {
    static navigationOptions = {
        headerShown: false,
    };
    render() {
        return (
            // <View>
            //     <Text> Home </Text>
            //     <Button title="Goto About" onPress={()=>{this.props.navigation.navigate('AboutNav')}}></Button>
            // </View>

            // <ApplicationProvider mapping={mapping} theme={lightTheme}>
            //     <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            //         <Text category='h1'>HOME</Text>
            //         <Button onPress={()=>{this.props.navigation.navigate('AboutNav')}}>Goto About</Button>
            //     </Layout>
            // </ApplicationProvider>

            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text category='h1'>HOME</Text>
                <Button onPress={()=>{this.props.navigation.navigate('AboutNav')}}>Goto About</Button>
            </Layout>
        )
    }
}
