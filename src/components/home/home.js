
import React,{Component} from 'react'
import {View,Text} from 'react-native'


export default class Home extends React.Component{


    static navigationOptions = {
        header:null,
    }


    render(){

        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
}
