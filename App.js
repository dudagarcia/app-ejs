import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MainScreen from './screens/MainScreen.js';
import LoginNavigator from './navigation/LoginNavigator';
import AccountScreen from './screens/AccountScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen.js';


const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-bold": require("./assets/fonts/RobotoBold.ttf"),
    "roboto-regular": require("./assets/fonts/RobotoRegular.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <LoginNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
