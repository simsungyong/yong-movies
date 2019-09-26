import {createStackNavigator} from 'react-navigation-stack';
import { BG_COLOR, TINT_COLOR } from '../constants/Colors';


export const headerStyles={
    headerStyle:{  //header 디자인  navigationOptions 중에 하나
        backgroundColor:BG_COLOR,
        borderBottomWidth: 0 //header 아래경계선
    },
    headerTitleStyle:{ //header안에 타이틀 디자인
        color: TINT_COLOR
    },
    headerTintColor: TINT_COLOR  //header에 뒤로 가기 버튼 색깔
}

export const createStack = (screen, title)=>
    createStackNavigator({
        Screen:{
            screen,
            navigationOptions:{
            title,
            ...headerStyles
            }
        }
    });

