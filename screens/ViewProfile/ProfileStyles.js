import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import {
  marginsBetweenElements,
  containerHeight,
  dropdownItemHeight,
} from "./ProfileConstants";

export const ProfileStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
  },

  body: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },

  logoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    marginTop: -55,
    marginHorizontal: 120,
  },

  logoBorda: {
    display: "flex",
    backgroundColor: "#4F7DDF",
    borderRadius: 100,
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: colors.mainDark,
    fontSize: 20,
    fontFamily: "roboto-bold",
  },

  profilePictureContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
  },

  profilePictureStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 60,
    overflow: "hidden",
    zIndex: 2000,
  },

  scrollContent: {
    alignItems: "center",
  },

  scrollContainer: {
    marginTop: 10,
    height: 450,
    flex: 0,
    flexGrow: 1,
  },

  container: {
    /*
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    */
    /*
    flexDirection: "column",
    //flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    
    //zIndex: 1,
    */
    alignSelf: "center",
    flex: 0,
    backgroundColor: "#fff",
    marginHorizontal: "5%",
    //marginLeft: 30,
    borderRadius: 25,
    padding: 30,
    shadowColor: "#fff",
    shadowRadius: 5,
    elevation: 8,
    //height: viewHeight(),
    //width: 320,
    width: "90%",
    height: 520,
    //position: "absolute",
    marginTop: 70,
  },

  activeDataText: {
    color: colors.mainDark,
    fontFamily: "roboto-regular",
    fontSize: 14,
    textAlign: "center",
  },

  inactiveDataText: {
    ...{ color: colors.mediumBlue },
    ...self.activeDataText,
  },

  invalidDataText: { ...self.activeDataText, ...{ color: colors.invalid } },

  dataContainer: {
    marginTop: marginsBetweenElements,
    marginHorizontal: 0,
    height: containerHeight,
    width: "100%",
    //width: 300,
    borderRadius: 15,
    backgroundColor: colors.softBlue,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  halfDataContainer: {
    //marginTop: 20,
    marginHorizontal: 0,
    height: containerHeight,
    width: "49%",
    borderRadius: 15,
    backgroundColor: colors.softBlue,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  /*
  halfDataContainer: {
    ...self.dataContainer,
    ...{ marginTop: 0, width: "49%" },
  },
  */
  rowContainer: {
    //flex: 1,
    //backgroundColor: "#fff",
    width: "100%",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",

    height: containerHeight,
    marginTop: marginsBetweenElements,
  },

  titleContainer: {
    marginTop: 10,
    marginLeft: 0,
  },

  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: "6%",
    width: "88%",
    justifyContent: "space-evenly",
    position: "absolute",
    marginTop: 572,
    resizeMode: "cover",
    zIndex: 3000,
  },

  buttonIcon: {
    width: 59,
    height: 59,
  },

  pickerStyle: {
    backgroundColor: colors.softBlue,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  dropDownContainer: {
    width: "100%",
    height: containerHeight,
  },

  dropDownItem: {
    justifyContent: "flex-start",
    //alignItems: "flex-start",
    //textAlign: "center",
    height: dropdownItemHeight,
  },

  dropDownLabel: {
    /*
    ...self.activeDataText,
    */
    fontSize: 14,
    fontFamily: "roboto-regular",
    //textAlign: "right",
    color: colors.mediumBlue,
    //alignItems: "center",
    //justifyContent: "center",
    textAlign: "center",
  },
});
