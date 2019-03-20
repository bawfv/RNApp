
import React,{Component}from 'react'
import {Button,View,DeviceEventEmitter} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'


export default class login extends React.Component{

    static navigationOptions = {
        header : null
    }

    componentWillMount(){
        // this.props.navigation.title = "登录"
    }

    loginIn = async ()=>{
        await AsyncStorage.setItem('userToken','1111')
        this.props.navigation.navigate('App')
    }


    render() {
        return (
            <View style={styles.container}>
                <Button title="login" onPress={this.loginIn}/>
                <Button title="register" onPress={()=>{this.props.navigation.push('Register')}}/>
            </View>
        );
    }
}

