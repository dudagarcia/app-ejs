import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Login from "./screens/Login";
import Main from "./screens/Main";
import { AccountScreen, ResetPasswordScreen, EditProfileScreen, } from "./screens";
import { SignedInNavigator, SignedOutNavigator } from "./navigation/routes";
import { isSignedIn, onSignIn, onSignOut } from "./services/auth";
import { searchUserById } from "./services/user";
import store from './redux/store';
import { Provider } from 'react-redux';
import { GerenciarPerfis } from "./screens/Main/components";

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-bold": require("./assets/fonts/RobotoBold.ttf"),
    "roboto-regular": require("./assets/fonts/RobotoRegular.ttf"),
  });
};

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [logged, setLogged] = useState(null);
  const [user, setUser] = useState();

  const verifyUserLogged = () => {
    isSignedIn().then(res => setLogged(res));
    if(logged) {
      searchUserById({ id: logged}).then((res)=>setUser(res))
    }
  }

  useEffect(()=>{
    verifyUserLogged()
  },[]);

  return (
    <Provider store={store}>
      {
        !dataLoaded ? 
        (
          <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setDataLoaded(true)}
          onError={(err) => console.log(err)}
        />
        ) : 
        (
          logged ? <SignedInNavigator/> : <SignedOutNavigator />
        )
    }
    </Provider>
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

export default App;