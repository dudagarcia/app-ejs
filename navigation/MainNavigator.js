import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen, ViewProfileScreen } from '../screens';

const MainNativator = createStackNavigator({

    Main: { screen: MainScreen, navigationOptions: { headerShown: false } },
    Profile: { screen: ViewProfileScreen, navigationOptions: { headerShown: false}},

});

export default createAppContainer(MainNativator);
