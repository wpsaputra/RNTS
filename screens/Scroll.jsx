import React, { Component } from 'react'
// import { Text, View, Button } from 'react-native'

import { ApplicationProvider, Layout, Text, Button, Icon, ButtonGroup } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { TouchableHighlight, Text as TextNative } from 'react-native';

export default class Scroll extends Component {
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
            <View style={{width: "100%", height: "100%", backgroundColor: "pink"}}>
                <ScrollView style={{width: "100%", height: "100%", backgroundColor: "green"}}>
                    <Layout style={{flex: 1, alignItems: 'center', backgroundColor: "#f9f9f9"}}>
                        
                        <View style={{width: "100%", height: 170}}>
                            <View style={{width: this.width, height: this.width, backgroundColor:"#ffab4b", borderRadius: this.width/2, position: "absolute", left: 0, bottom: 0, transform: [{scaleX: 2}] }} />
                            <View style={{width: "100%", height: 100, backgroundColor:"#ffab4b", display: "flex", justifyContent: "flex-end", paddingLeft: 20, paddingRight: 20}}>
                                <View style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                                    <View>
                                        <Text style={{color: "white", fontSize: 16}}>Hi</Text>
                                        <Text style={{color: "white", fontSize: 16}}>Selamat Datang</Text>
                                    </View>
                                    <Icon name="bell-outline" width={32} height={32} fill="white"/>
                                </View>
                            </View>
                        </View>
        
                        <Layout style={{width: "100%", paddingLeft: 20, paddingRight: 20, backgroundColor: "#f9f9f9"}}>
                            <Card style={{width: "100%", marginTop: -50, paddingLeft: 0, paddingRight:0, paddingTop: 16}} elevation={4} >
                                <View style={{paddingLeft: 20, paddingRight: 20}}>
                                    <Text style={{fontSize: 16}}>Total</Text>
                                    <Text style={{fontSize: 16, fontWeight: "bold"}}>Rp. 3.000.000</Text>
                                </View>
                                <View style={{width: "100%", display: "flex", flexDirection: "row", marginTop: 10}}>
                                    {/* <TouchableHighlight style={{width: "50%"}} underlayColor="#DDDDDD" onPress={()=>{}}>
                                        <TextNative>Riwayat</TextNative>
                                    </TouchableHighlight> */}
                                    <TouchableHighlight style={{width: "50%", display: "flex", alignItems: "center", borderColor: "#f4f4f4", borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, padding: 10}} underlayColor="#DDDDDD" onPress={()=>{}}>
                                        <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                            <Icon name='clock' width={24} height={24} fill='#ffab4b'/>
                                            <TextNative style={{color: "#ffab4b", marginLeft: 10}}>Riwayat</TextNative>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={{width: "50%", display: "flex", alignItems: "center", borderColor: "#f4f4f4", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, padding: 10}} underlayColor="#DDDDDD" onPress={()=>{}}>
                                        <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                            <Icon name='plus-circle-outline' width={24} height={24} fill='#5988f2'/>
                                            <TextNative style={{color: "#5988f2", marginLeft: 10}}>Isi Saldo</TextNative>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </Card>
                        </Layout>
        
                        <View style={{display: "flex", width: "100%", marginTop:10, paddingLeft: 20, paddingRight: 20,flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
                            <Card style={{width: "30%", marginTop: 10, borderRadius:10}} elevation={4}>
                                <TouchableHighlight style={{width: "100%", display: "flex", alignItems: "center", paddingTop:10, paddingBottom: 10, borderRadius:10}} underlayColor="#DDDDDD" onPress={()=>{this.props.navigation.navigate('LoginNav')}}>
                                    <View style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor: "#e4f3fe", justifyContent: "center", alignItems: "center"}}>
                                            <Icon name="gift-outline" width={32} height={32} fill="#5ab3f8"></Icon>
                                        </View>
                                        <Text style={{fontSize: 12, marginTop: 5, fontWeight: "600"}}>Bayar SPP</Text>
                                    </View>
                                </TouchableHighlight>
                            </Card>
        
                            <Card style={{width: "30%", marginTop: 10, borderRadius:10}} elevation={4}>
                                <TouchableHighlight style={{width: "100%", display: "flex", alignItems: "center", paddingTop:10, paddingBottom: 10, borderRadius:10}} underlayColor="#DDDDDD" onPress={()=>{this.props.navigation.navigate('AboutNav')}}>
                                    <View style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor: "#e4f3fe", justifyContent: "center", alignItems: "center"}}>
                                            <Icon name="gift-outline" width={32} height={32} fill="#5ab3f8"></Icon>
                                        </View>
                                        <Text style={{fontSize: 12, marginTop: 5, fontWeight: "600"}}>Bayar SPP</Text>
                                    </View>
                                </TouchableHighlight>
                            </Card>
        
                            <Card style={{width: "30%", marginTop: 10, borderRadius:10}} elevation={4}>
                                <TouchableHighlight style={{width: "100%", display: "flex", alignItems: "center", paddingTop:10, paddingBottom: 10, borderRadius:10}} underlayColor="#DDDDDD" onPress={()=>{}}>
                                    <View style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor: "#e4f3fe", justifyContent: "center", alignItems: "center"}}>
                                            <Icon name="gift-outline" width={32} height={32} fill="#5ab3f8"></Icon>
                                        </View>
                                        <Text style={{fontSize: 12, marginTop: 5, fontWeight: "600"}}>Bayar SPP</Text>
                                    </View>
                                </TouchableHighlight>
                            </Card>
        
                            <Card style={{width: "30%", marginTop: 20, borderRadius:10}} elevation={4}>
                                <TouchableHighlight style={{width: "100%", display: "flex", alignItems: "center", paddingTop:10, paddingBottom: 10, borderRadius:10}} underlayColor="#DDDDDD" onPress={()=>{}}>
                                    <View style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor: "#e4f3fe", justifyContent: "center", alignItems: "center"}}>
                                            <Icon name="gift-outline" width={32} height={32} fill="#5ab3f8"></Icon>
                                        </View>
                                        <Text style={{fontSize: 12, marginTop: 5, fontWeight: "600"}}>Bayar SPP</Text>
                                    </View>
                                </TouchableHighlight>
                            </Card>
        
                            <Card style={{width: "30%", marginTop: 20, borderRadius:10}} elevation={4}>
                                <TouchableHighlight style={{width: "100%", display: "flex", alignItems: "center", paddingTop:10, paddingBottom: 10, borderRadius:10}} underlayColor="#DDDDDD" onPress={()=>{}}>
                                    <View style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor: "#e4f3fe", justifyContent: "center", alignItems: "center"}}>
                                            <Icon name="gift-outline" width={32} height={32} fill="#5ab3f8"></Icon>
                                        </View>
                                        <Text style={{fontSize: 12, marginTop: 5, fontWeight: "600"}}>Bayar SPP</Text>
                                    </View>
                                </TouchableHighlight>
                            </Card>
        
                            <Card style={{width: "30%", marginTop: 20, borderRadius:10}} elevation={4}>
                                <TouchableHighlight style={{width: "100%", display: "flex", alignItems: "center", paddingTop:10, paddingBottom: 10, borderRadius:10}} underlayColor="#DDDDDD" onPress={()=>{}}>
                                    <View style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor: "#e4f3fe", justifyContent: "center", alignItems: "center"}}>
                                            <Icon name="gift-outline" width={32} height={32} fill="#5ab3f8"></Icon>
                                        </View>
                                        <Text style={{fontSize: 12, marginTop: 5, fontWeight: "600"}}>Bayar SPP</Text>
                                    </View>
                                </TouchableHighlight>
                            </Card>
                        </View>
        
                        <View style={{width: "100%", padding: 20, marginTop: 20}} elevation={4}>
                            <Text category="h6">Log Aktivitas</Text>
                            <Card style={{marginTop: 10, padding: 20}}>
                                <View style={{width: "100%", display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
                                    <Text style={{maxWidth: "70%", color: "red"}} numberOfLines={1}>Tidak hadir di pelajaran sejarah</Text>
                                    <Text style={{maxWidth: "30%"}}>23 Nov 2019</Text>
                                </View>
                            </Card>
                        </View>

                        <Text>Nano</Text>
                        <Text>Nano</Text>
                        <Text>Nano</Text>
                        <Text>Nano</Text>
                        <Text>Nano</Text>
                        <Text>Nano</Text>
                        <Text>Nano</Text>
                        <Text>Nano</Text>
                        <Text>Nano</Text>
                        <Text>Nano</Text>
                        <Text>Nano</Text>
                        <Text>Nano</Text>
        
        
                    </Layout>
                        
                </ScrollView>

                <View style={{width: "100%", backgroundColor: "white", height: 60, position: "absolute", bottom: 0, display: "flex", flexDirection:"row", justifyContent: "space-around", alignItems: "center", elevation: 24}}>
                    <Icon name="home" width={32} height={32} fill="#ffab4b"></Icon>
                    <Icon name="github" width={32} height={32} fill="#bbbbbb"></Icon>
                    <Icon name="people" width={32} height={32} fill="#bbbbbb"></Icon>
                </View>

            </View>
        )
    }
}
