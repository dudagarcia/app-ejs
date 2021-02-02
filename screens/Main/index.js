import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Animated, ImageBackground, Dimensions } from "react-native";
import { colors, images, screenSize} from '../../constants';
import { MenuItem, BackContent } from "./components";


const MainScreen = (props) => {

  const [menuPositionX, setMenuPosition] = useState(new Animated.Value(1));
  const [smallMenuDisplay, setSmallMenuDisplay] = useState("none");
  const [selectedMenuItem, setSelectedMenuItem] = useState("");


  const smallMenuAnimation = (itemName) => {
    Animated.timing(menuPositionX, {
      toValue: (-0.76)*screenSize.width,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setSmallMenuDisplay("flex");
    setSelectedMenuItem(itemName);
  };


  const backHome = () => {
    Animated.timing(menuPositionX, {
      toValue: 2,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setSmallMenuDisplay("none");
    setSelectedMenuItem("");
  }


  return (
    <View style={styles.body}>
      <ImageBackground
        source={images.backgroundMain.uri}
        style={styles.backgroundImage}
      >

        <BackContent 
          smallMenuDisplay={smallMenuDisplay}
          itemName={selectedMenuItem}
        />

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


          <View style={styles.contentContainer}>
            <View style={styles.usernameContainer}>
              <Text style={styles.username}>Olá, User!</Text>
            </View>
            <View style={styles.menuContainer}>
              <Animated.View style={styles.menu}>
                <MenuItem
                  title="Home"
                  image={images.logo.uri}
                  imageNotSelected={images.logo.uri}
                  selectedMenuItem={selectedMenuItem}
                  onClick={() => {
                    backHome()
                  }}
                  smallMenuDisplay={smallMenuDisplay}
                  style={{display: smallMenuDisplay}}
                />

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

                <MenuItem
                  title="Gerenciar Perfis"
                  image={images.doubleMemberIcon.uri}
                  imageNotSelected={images.doubleMemberIconNotSelected.uri}
                  selectedMenuItem={selectedMenuItem}
                  onClick={() => {
                    smallMenuAnimation("Gerenciar Perfis");
                  }}
                  smallMenuDisplay={smallMenuDisplay}
                />

                <MenuItem
                  title="Gerenciar Projetos"
                  image={images.handsIconSelected.uri}
                  imageNotSelected={images.handsIconNotSelected.uri}
                  selectedMenuItem={selectedMenuItem}
                  onClick={() => {
                    smallMenuAnimation("Gerenciar Projetos");
                  }}
                  smallMenuDisplay={smallMenuDisplay}
                />

                <MenuItem
                  title="Gerenciar Setores"
                  image={images.bagIconSelected.uri}
                  imageNotSelected={images.bagIconNotSelected.uri}
                  selectedMenuItem={selectedMenuItem}
                  onClick={() => {
                    smallMenuAnimation("Gerenciar Setores");
                  }}
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
    marginTop: "-25%",
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
    height: "80%",
    marginTop: 60,
  },

  contentContainer: {
    marginTop: 40,
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "95%",
  },

  menuContainer: {},

  usernameContainer: {
    marginTop: 15,
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

});

export default MainScreen;
