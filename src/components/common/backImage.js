import React,{Component} from 'react'
import {Image} from "react-native";


export default class image extends React.Component{
    render() {
        return <Image
            source={require('../../resources/images/icon_back.png')}
            style={{width: 8.5,height: 17,marginLeft: 10}}
        />
    }
}
