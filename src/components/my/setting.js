
import React,{} from 'react'
import {View,Text} from 'react-native'


export default class Setting extends React.Component{

    static navigationOptions = {
        headerTitle:'设置'
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>setting</Text>
            </View>
        );
    }
}
