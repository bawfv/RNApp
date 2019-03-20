
import React,{} from 'react'
import {View,Text} from 'react-native'


export default class Message extends React.Component{

    static navigationOptions = {
        headerTitle:'消息'
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>消息</Text>
            </View>
        );
    }
}
