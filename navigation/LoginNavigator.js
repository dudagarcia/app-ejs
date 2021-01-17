import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from  '../screens/LoginScreen';
import AccountScreen from '../screens/AccountScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import CodeRecoveryScreen from '../screens/CodeRecoveryScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import AlteredPasswordScreen from '../screens/AlteredPasswordScreen';
import MainScreen from '../screens/MainScreen';

const LoginNavigator = createStackNavigator({
    Login: { screen: LoginScreen, navigationOptions: { headerShown: false } },
    Main: { screen: MainScreen, navigationOptions: { headerShown: false } },
    Account: { screen: AccountScreen, navigationOptions: { headerShown: false } },
    ConfirmEmail: { screen: ConfirmEmailScreen, navigationOptions: { headerShown: false } },
    CodeRecovery: { screen: CodeRecoveryScreen, navigationOptions: { headerShown: false } },
    ResetPassword: { screen: ResetPasswordScreen, navigationOptions: { headerShown: false } },
    AlteredPassword: { screen: AlteredPasswordScreen, navigationOptions: { headerShown: false } }    
});

export default createAppContainer(LoginNavigator);
