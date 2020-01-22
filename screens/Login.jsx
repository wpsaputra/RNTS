import React, { Component } from 'react'
import { View, ImageBackground, Image, KeyboardAvoidingView } from 'react-native'
import { Layout, Input, Button, Text, Icon } from '@ui-kitten/components'
// import { Icon } from '@ui-kitten/eva-icons'

export default class Login extends Component {
    static navigationOptions = {
        headerShown: false,
    };

    GoogleIcon = (style) => (
        <Icon {...style} name="google"/>
    );
    
    render() {
        return (
            // <KeyboardAvoidingView behavior="padding" enabled>
            <KeyboardAvoidingView style={{width: "100%", height: "100%", backgroundColor: "white"}} behavior="padding" enabled>
                {/* // <Layout style={{flex: 1, justifyContent: "space-between", flexDirection: "column"}}> */}
                <Layout style={{flex: 1, flexDirection: "column", justifyContent: "space-between"}}>
                    {/* <ImageBackground source={require("../assets/login-background.jpg")} style={{width: '100%', height: '100%'}}>
                        <Text>Hello</Text>
                    </ImageBackground> */}
                    <Image source={require("../assets/login-background.jpg")} style={{width: '100%', height: 250}}/>
                    <View style={{paddingLeft: 20, paddingRight: 20, display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <Input
                            placeholder='Phone or Email'
                            value={null}
                            onChangeText={null}
                            style={{width: "100%", marginTop: 10}}
                            />
                        <Input
                            placeholder='Password'
                            value={null}
                            onChangeText={null}
                            style={{width: "100%", marginTop: 10}}
                        />
                        <Button style={{width: "100%", marginTop:10}}>Log In</Button>
                        <Text style={{color: "#3366ff", fontWeight: "bold", marginTop:20}}>Forgot Password?</Text>
                    </View>

                    <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingLeft: 20, paddingRight: 20}}>
                        <View style={{width: "45%", height: 1, backgroundColor: "#d0d0d0", overflow: "hidden"}}/>
                        <Text>OR</Text>
                        <View style={{width: "45%", height: 1, backgroundColor: "#d0d0d0", overflow: "hidden"}}/>
                    </View>

                    <View style={{paddingLeft: 20, paddingRight: 20, display: "flex", alignItems: "center", flexDirection: "column", marginBottom: 90}}>
                        {/* <Button style={{backgroundColor: "#28a745", borderColor: "#28a745"}}>Create New Facebook Account</Button> */}
                        <Button status="success" icon={this.GoogleIcon} onPress={()=>{this.props.navigation.navigate('HomeNav')}}>Sign In with Gooogle</Button>
                        {/* <Icon name="star"/> */}
                        {/* <Icon name='star' width={32} height={32} fill='#3366FF'/> */}
                    </View>

                </Layout>
            
            </KeyboardAvoidingView>
        )
    }
}
