import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  ImageBackground,
} from "react-native";
import colors from "../../constants/colors";
import images from "../../constants/images";
import { MinhasTarefas, MenuItem } from "./components";

const MainScreen = (props) => {
  const [menuPositionX, setMenuPosition] = useState(new Animated.Value(1));
  const [smallMenuDisplay, setSmallMenuDisplay] = useState("none");
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  const smallMenuAnimation = (itemName) => {
    Animated.timing(menuPositionX, {
      toValue: -318,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setSmallMenuDisplay("flex");
    setSelectedMenuItem(itemName);
  };

  return (
    <View style={styles.body}>
      <ImageBackground
        source={images.backgroundMain.uri}
        style={styles.backgroundImage}
      >
        <View style={styles.backContent}>
          <View style={styles.backContentBackground}>
            <MinhasTarefas buttonDisplay={smallMenuDisplay} />
          </View>
        </View>

        <Animated.View
          style={{
            ...styles.container,
            ...{ transform: [{ translateX: menuPositionX }] },
          }}
        >
          <View style={styles.logoContainer}>
            <View style={styles.logoBorda}>
              <Image source={images.logo.uri} style={styles.image} />
            </View>
          </View>

          <Text
            onPress={() => props.navigation.navigate({ routeName: "Profile" })}
          >
            AQUIII -----
          </Text>
          <View style={styles.contentContainer}>
            <View style={styles.usernameContainer}>
              <Text style={styles.username}>Olá, User!</Text>
            </View>
            <View style={styles.menuContainer}>
              <Animated.View style={styles.menu}>
                <MenuItem
                  title="Perfil"
                  image={images.perfilIcon.uri}
                  imageNotSelected={images.perfilIconNotSelected.uri}
                  selectedMenuItem={selectedMenuItem}
                  onClick={() => {
                    smallMenuAnimation("Perfil");
                  }}
                  smallMenuDisplay={smallMenuDisplay}
                />

                <MenuItem
                  title="Tarefas"
                  image={images.tarefasIcon.uri}
                  imageNotSelected={images.tarefasIconNotSelected.uri}
                  onClick={() => smallMenuAnimation("Tarefas")}
                  selectedMenuItem={selectedMenuItem}
                  smallMenuDisplay={smallMenuDisplay}
                />

                <MenuItem
                  title="Disponibilidades"
                  image={images.disponibilidadeIcon.uri}
                  imageNotSelected={images.disponibilidadeIconNotSelected.uri}
                  onClick={() => smallMenuAnimation("Disponibilidades")}
                  selectedMenuItem={selectedMenuItem}
                  smallMenuDisplay={smallMenuDisplay}
                />

                <MenuItem
                  title="Agenda"
                  image={images.agendaIcon.uri}
                  imageNotSelected={images.agendaIconNotSelected.uri}
                  onClick={() => smallMenuAnimation("Agenda")}
                  selectedMenuItem={selectedMenuItem}
                  smallMenuDisplay={smallMenuDisplay}
                />
              </Animated.View>
            </View>
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  body: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
  },

  logoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    marginTop: -70,
    marginLeft: 115,
  },

  logoBorda: {
    display: "flex",
    backgroundColor: "#4F7DDF",
    borderRadius: 100,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  usernameContainer: {
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  username: {
    color: colors.mainDark,
    fontSize: 24,
  },

  image: {
    width: 135,
    height: 135,
    borderRadius: 100,
  },

  container: {
    backgroundColor: "#fff",
    marginRight: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    paddingLeft: 30,
    paddingVertical: 30,
    paddingRight: 15,
    shadowColor: "#fff",
    shadowRadius: 5,
    elevation: 15,
    height: 600,
    marginTop: 60,
  },

  contentContainer: {
    marginTop: 40,
  },

  menu: {
    marginTop: 70,
  },

  menuContainer: {},

  usernameContainer: {
    marginTop: 28,
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  backContent: {
    position: "absolute",
  },

  // Minhas Tarefas, etc..
  backContentBackground: {
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    elevation: 8,
    backgroundColor: "#fff",
    height: 600,
    width: 395,
    marginLeft: -10,
    marginTop: 60,
    paddingBottom: 50,
    paddingLeft: 75,
    paddingTop: 50,
  },
});

export default MainScreen;
