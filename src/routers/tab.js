import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer ,createBottomTabNavigator,createNavigationContainer} from 'react-navigation';
import {Image} from 'react-native'
import Home from '../components/home/home'
import MyHome from '../components/my/my'
import MsgHome from '../components/massage/msg'
import AccHome from '../components/account/account'
import SettingPage from '../components/my/setting'
import BackImg from '../components/common/backImage'

import HomeIconNormal from '../resources/images/home_icon_normal.png'
import HomeIconPress from '../resources/images/home_icon_press.png'
import MyIconNormal from '../resources/images/my_icon_normal.png'
import MyIconPress from '../resources/images/my_icon_press.png'
import MsgIconNormal from '../resources/images/msg_icon_normal.png'
import MsgIconPress from '../resources/images/msg_icon_press.png'
import AccIconNormal from '../resources/images/account_icon_normal.png'
import AccIconPress from '../resources/images/account_icon_press.png'


const HomeStack = createStackNavigator(
    {
        Home : Home,
    }
);

const MyStack = createStackNavigator(
    {
        MyHome : MyHome,
        Setting : SettingPage,
    }
)

const AccStack = createStackNavigator(
    {
        AccHome : AccHome,
    }
);

const MsgStack = createStackNavigator(
    {
        MsgHome : MsgHome
    }
)


export default createAppContainer(createBottomTabNavigator(
    {
        首页 : HomeStack,
        消息 : MsgStack,
        账户 : AccStack,
        我的 : MyStack
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon;
                if (routeName === '首页') {
                    icon = focused ? HomeIconPress : HomeIconNormal
                }else if (routeName === '消息') {
                    icon = focused ? MsgIconPress : MsgIconNormal
                }else if (routeName === '账户') {
                    icon = focused ? AccIconPress : AccIconNormal
                } else if (routeName === '我的') {
                    icon = focused ? MyIconPress : MyIconNormal
                }

                return <Image
                    source={icon}
                    style={{width:25,height:25}}
                />;
            },
            headerBackTitle : null,
            headerTitleStyle : {
                color : 'rgba(51,51,51,1)',
                fontSize : 17
            },
            headerBackImage : <BackImg/>,
        }),
        tabBarOptions: {
            activeTintColor: 'rgba(156,104,1,1)',
            inactiveTintColor: 'rgba(153,153,153,1)',
        }
    }
))
