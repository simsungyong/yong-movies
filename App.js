import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import *as Font from 'expo-font';


export default class App extends React.Component {

  state = {
    loaded : false //state기본값은 false
  };
  handleError = (error) => console.log(error); 
  handleLoaded = () =>this.setState({loaded:true}); 

  loadAssets= async()=>{
    await Font.loadAsync({
      ...Ionicons.font
    });
  };
    // 실시간 받아오는 싱크!


  render(){
    const {loaded} = this.state;
    if(loaded){
      return(
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      );
    } else{
      return <AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError}/>  
      //expo package에잇는 로딩하는 화면 startAsync(로드할때)onfinish(로딩끝낫을때), onError에러날때
    }
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
