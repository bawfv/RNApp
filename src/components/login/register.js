
import React,{Component} from 'react'
import {Button, View,Text} from 'react-native'

export default class Register extends React.Component {

    static navigationOptions = {
        headerTitle : '注册'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>register</Text>
            </View>
        );
    }

}
