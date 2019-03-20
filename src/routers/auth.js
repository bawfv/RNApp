import React from 'react'
import {ActivityIndicator, StatusBar, View} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import SplashScreen from "react-native-splash-screen";

export default class AuthLoadingScreen extends React.Component {

    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        SplashScreen.hide()
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
