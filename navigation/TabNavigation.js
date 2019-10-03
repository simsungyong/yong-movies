import React from 'react';
import {createAppContainer} from 'react-navigation';
import {Platform,View,Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MoviesScreen from '../screens/Movies';
import TVScreen from '../screens/TV';
import SearchScreen from '../screens/Search';   //node js가 자동적으로 index.js를 먼저 찾는다.!!!
import {BG_COLOR, GREY_COLOR} from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import {createStackNavigator} from 'react-navigation-stack';
import {createStack} from './config';


  //screen,title 인자를 가진다 공통된 옵션 정해놓는 함수

const TabNavigation = createBottomTabNavigator({//RouteConfigs, TabNavigatorConfig 두가지 인자를 파라미터로
    Movie:{
        screen: createStack(MoviesScreen, 'Movie'), //createstack 메서도는 config.js파일에 해놈. 
        navigationOptions:{
            tabBarIcon:({focused}) => (
                <TabBarIcon focused={focused} name={Platform.OS==='ios'? 'ios-film' : 'md-film'}/>
            )
        }
        },
    TV:{
        screen:createStack(TVScreen, "TV"),
        navigationOptions:{
            tabBarIcon:({focused}) => (
                <TabBarIcon focused={focused} name={Platform.OS==='ios'? 'ios-tv' : 'md-tv'}/>
            )
        }
        },
    Search:{
        screen: createStack(SearchScreen, "Search"),
        navigationOptions:{
            tabBarIcon:({focused}) => (
                <TabBarIcon focused={focused} name={Platform.OS==='ios'? 'ios-search' : 'md-search'}/>
            )
        }
        }
    },
    {   
        initialRouteName: "Movie", //어플첫화면
        tabBarOptions:{//createbottomtabnavigator 의 config
            showLabel:false,
            style:{
                backgroundColor: BG_COLOR
            }
        }

    }
);

export default createAppContainer(TabNavigation);