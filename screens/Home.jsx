import React, { Component } from 'react'
// import { Text, View, Button } from 'react-native'

import { ApplicationProvider, Layout, Text, Button, Icon } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { View, Dimensions } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        headerShown: false,
    };
    height = Dimensions.get('window').height;
    width = Dimensions.get('window').width;
    top = this.width-100;

    GoogleIcon = (style) => (
        <Icon {...style} name="google"/>
    );

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

            // <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                {/* <View style={{width: this.width, height: this.width, backgroundColor:"blue", borderRadius: this.width/2, position: "absolute", left: 0, top: -this.width/2, scaleX: 1.5}} /> */}
                
                {/* <View style={{width: this.width, height: this.width, backgroundColor:"blue", borderRadius: this.width/2, position: "absolute", left: 0, top: -(this.width/2), transform: [{scaleX: 1.5}] }} />
                <View style={{width: "100%", height: 100, backgroundColor:"red"}} /> */}
                
                {/* <View style={{width: "100%", height: 100, backgroundColor:"blue", borderRadius: Dimensions.get('window').height, position: "absolute", left: 0, top: 50}} /> */}
                {/* <View style={{width: "100%", height: 100, backgroundColor:"blue", borderRadius: 8000, position: "absolute", left: 0, top: 50}} /> */}
                {/* <Text category='h1'>HOME</Text>
                <Button onPress={()=>{this.props.navigation.navigate('AboutNav')}}>Goto About</Button> */}
                
                <View style={{width: "100%", height: 170}}>
                    <View style={{width: this.width, height: this.width, backgroundColor:"#ffab4b", borderRadius: this.width/2, position: "absolute", left: 0, bottom: 0, transform: [{scaleX: 2}] }} />
                    <View style={{width: "100%", height: 100, backgroundColor:"#ffab4b", display: "flex", justifyContent: "flex-end", paddingLeft: 20, paddingRight: 20}}>
                        <View style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                            <View>
                                <Text style={{color: "white", fontSize: 16}}>Hi</Text>
                                <Text style={{color: "white", fontSize: 16}}>Selamat Datang</Text>
                            </View>
                            <Icon name="bell" width={32} height={32} fill="white"/>
                        </View>
                    </View>
                </View>
            </Layout>
        )
    }
}
