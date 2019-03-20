
import React,{} from 'react'
import {View, Text, Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class MyHome extends React.Component{

    static navigationOptions = {
        headerTitle:'我的'
    }

    signOut = ()=>{
        AsyncStorage.clear()
        this.props.navigation.navigate('Auth')
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>我的</Text>
                <Button title="setting" onPress={()=>{this.props.navigation.navigate('Setting')}}/>
                <Button title="注销" onPress={this.signOut}/>
            </View>
        );
    }
}
