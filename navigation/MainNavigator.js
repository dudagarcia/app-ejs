import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen, ViewProfileScreen } from '../screens';

const MainNavigator = createStackNavigator({
    MainX: { screen: MainScreen, navigationOptions: { headerShown: false } },
    Profile: { screen: ViewProfileScreen, navigationOptions: { headerShown: false}},
});

export default createAppContainer(MainNavigator);
