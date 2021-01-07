import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen.js';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen.js';
import VerifiedAccountScreen from './screens/VerifiedAccountScreen.js';
import LeaveAccountScreen from './screens/LeaveAccountScreen.js';
import CodeRecoveryScreen from './screens/CodeRecoveryScreen.js';
import MainScreen from './screens/MainScreen.js';


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
    <MainScreen/>
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
