import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import TabNavigation from './TabNavigation'; //navigation
import DetailScreen from '../screens/Detail/index';  //screen
import { headerStyles } from './config';


const MainNavigation = createStackNavigator({ //createStackNavigator(RouteConfigs, StackNavigatorConfig);
    Tabs: {screen: TabNavigation, navigationOptions:{header: null }},   //header는 null. why?  tabnavigation에서 탭마다 새로운 헤더와 타이틀 설정해준다.(tabnavigation에서 createStack 메서드 호출)
    Detail: {
        screen: DetailScreen,
        navigationOptions:{...headerStyles}   
}},{
    headerMode:"screen",
    headerBackTitleVisible: false
});

export default createAppContainer(MainNavigation);


//react-navigation-stack depends on the following libraries in addition to react-navigation itself:
//react-native-gesture-handler, react-native-screens
// 저거 깔려야 됨