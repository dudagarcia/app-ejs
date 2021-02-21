import AsyncStorage from '@react-native-community/async-storage';

export const TOKEN_KEY = "@mykey:token";

export const onSignIn = (id) => AsyncStorage.setItem(TOKEN_KEY, String(id));

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return token;
}