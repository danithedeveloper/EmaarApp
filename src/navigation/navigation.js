import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SplashScreen from '../views/components/Splash/SplashScreen';
import Register from '../views/components/Register';
import Home from '../views/components/Home';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
    RegisterScreen: {
        screen: Register,
    },
    HomeScreen: {
        screen: Home,
    },
}, {initialRouteName: 'RegisterScreen', headerMode:'none'});

const AppStack = createSwitchNavigator({
    Splash: SplashScreen,
    AppNav: AppNavigator,
});


const Navigation = createAppContainer(
    createSwitchNavigator({
        Home: AppStack,
    }),
);

export default Navigation;
