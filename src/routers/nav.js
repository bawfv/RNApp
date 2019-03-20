import React from 'react';
import { createStackNavigator, createAppContainer ,createBottomTabNavigator} from 'react-navigation';
import Login from '../components/login/login'
import Register from '../components/login/register'
import BackImg from "../components/common/backImage";


export default createAppContainer(createStackNavigator(
    {
        Login: Login,
        Register: Register,
    },
    {
        initialRouteName: 'Login',

        defaultNavigationOptions :{
            headerBackTitle : null,
            headerTitleStyle : {
                color : 'rgba(51,51,51,1)',
                fontSize : 17
            },
            headerBackImage : <BackImg/>,
        }
    }
))
