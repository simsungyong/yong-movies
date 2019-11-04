import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {AppLoading} from 'expo';  //expo에서 제공하는 로딩 함수
import {Ionicons} from '@expo/vector-icons';
import *as Font from 'expo-font';
import MainNavigation from './navigation/MainNavigation';


export default class App extends React.Component {

  state = {
    loaded : false,  //state기본값은 false
  };

  handleError = (error) => console.log(error); 
  handleLoaded = () =>this.setState({loaded:true}); 

  loadAssets= async()=>{ //미리 폰트 가져오고 앱 실행
    await Font.loadAsync({
      ...Ionicons.font   //Ionicons.font 세부 다 들고오는거
    });
  };
  
  render(){
    const {loaded} = this.state;
    if(loaded){
      return (<>
                <StatusBar barStyle='light-content'/>    
                <MainNavigation/>
              </>);//왜 <> </>안하면 에러가 날까?  하나의 리턴에 두개의 컴포넌트 불가.--> 프래그먼트로 감싼다.
    } else{
      return <AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError}/>  
      //앱에서 랜더링 처음 할때, Expo가 app 로딩 화면을 열지 말지 말해주는 리엑트 컴포넌트 
      //expo package에잇는 로딩하는 화면 startAsync(로드할때)onfinish(로딩끝낫을때), onError에러날때
      //autoHideSplash 를 false로 하면 로딩스크린안보임.
    }
  } 
}

