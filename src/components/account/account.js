
import React,{} from 'react'
import {View,Text} from 'react-native'


export default class Account extends React.Component{

    static navigationOptions = {
        header:null
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>账户</Text>
            </View>
        );
    }
}
