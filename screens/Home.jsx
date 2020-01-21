import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text> Home </Text>
                <Button title="Goto About" onPress={()=>{this.props.navigation.navigate('AboutNav')}}></Button>
            </View>
        )
    }
}
