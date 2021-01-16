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
    Login: LoginScreen,
    Main: MainScreen,
    Account: AccountScreen,
    ConfirmEmail: ConfirmEmailScreen,
    CodeRecovery: CodeRecoveryScreen,
    ResetPassword: ResetPasswordScreen,
    AlteredPassword: AlteredPasswordScreen    
});

export default createAppContainer(LoginNavigator);