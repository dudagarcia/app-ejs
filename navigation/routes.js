import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AccountScreen, ConfirmEmailScreen, CodeRecoveryScreen, ResetPasswordScreen, AlteredPasswordScreen, MainScreen, LoginScreen, ViewProfileScreen, EditProfileScreen} from '../screens'

const SignedOutRoutes = createStackNavigator({
    Login: { screen: LoginScreen, navigationOptions: { headerShown: false } },
    Account: { screen: AccountScreen, navigationOptions: { headerShown: false } },
    ConfirmEmail: { screen: ConfirmEmailScreen, navigationOptions: { headerShown: false } },
    CodeRecovery: { screen: CodeRecoveryScreen, navigationOptions: { headerShown: false } },
    ResetPassword: { screen: ResetPasswordScreen, navigationOptions: { headerShown: false } },
    AlteredPassword: { screen: AlteredPasswordScreen, navigationOptions: { headerShown: false } },
 
});

const SignedInRoutes = createStackNavigator({
    Main: { screen: MainScreen, navigationOptions: { headerShown: false } },
    Profile: { screen: EditProfileScreen, navigationOptions: { headerShown: false}},   
})

export const SignedInNavigator = createAppContainer(SignedInRoutes);
export const SignedOutNavigator = createAppContainer(SignedOutRoutes);