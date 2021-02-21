import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import {
  marginsBetweenElements,
  containerHeight,
  dropdownItemHeight,
} from "./ProfileConstants";
import { Dimensions } from 'react-native';

export const ProfileStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },

  body: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    flexDirection: "column",
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
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
    alignSelf: "center",
    flex: 0,
    backgroundColor: "#fff",
    marginHorizontal: "5%",
    borderRadius: 25,
    padding: 30,
    shadowColor: "#fff",
    shadowRadius: 5,
    elevation: 8,
    width: "90%",
    height: "80%",
    maxHeight: 620,
    marginTop: 70,
  },

  activeDataText: {
    color: colors.mainDark,
    fontFamily: "roboto-regular",
    fontSize: 14,
    textAlign: "center",
    width: "100%"
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
    borderRadius: 15,
    backgroundColor: colors.softBlue,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  halfDataContainer: {
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

  rowContainer: {
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
    width: "100%",
    justifyContent: "space-around",
    marginTop: 20,
    resizeMode: "cover",
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

  imagePicker: {
    position: "absolute",
    width: 40,
    height: 40,
    marginTop: 100,
    marginLeft: 120,
  },

  dropDownContainer: {
    width: "100%",
    height: containerHeight,
  },

  dropDownItem: {
    justifyContent: "flex-start",
    height: dropdownItemHeight,
  },

  dropDownLabel: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    color: colors.mediumBlue,
    textAlign: "center",
  },
});
