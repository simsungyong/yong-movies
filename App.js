import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {AppLoading} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import *as Font from 'expo-font';
import MainNavigation from './navigation/MainNavigation';



export default class App extends React.Component {

  state = {
    loaded : false //state기본값은 false
  };
  handleError = (error) => console.log(error); 
  handleLoaded = () =>this.setState({loaded:true}); 

  loadAssets= async()=>{ //미리 폰트 가져오고 앱 실행
    await Font.loadAsync({
      ...Ionicons.font
    });
  };
  
  render(){
    const {loaded} = this.state;
    if(loaded){
      return (<>
                <StatusBar barStyle='light-content'/>    
                <MainNavigation/>
              </>);//왜 <> </>안하면 에러가 날까?  /
    } else{
      return <AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError}/>  
      //expo package에잇는 로딩하는 화면 startAsync(로드할때)onfinish(로딩끝낫을때), onError에러날때
    }
  } 
}

