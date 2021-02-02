import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AccountScreen, ConfirmEmailScreen, CodeRecoveryScreen, ResetPasswordScreen, AlteredPasswordScreen, MainScreen} from '../screens'

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
