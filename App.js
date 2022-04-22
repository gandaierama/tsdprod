import React, { useState, setState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import OneSignal from "react-native-onesignal";
import Constants from "expo-constants";
import {
  Pressable,
  Vibration,
  ScrollView,
  Image,
  PermissionsAndroid,
  Dimensions,
  SafeAreaView,
  Alert,
  TextInput,
  ImageBackground,
  StyleSheet,
  View,
  AsyncStorage,
  Animated,
  AppState,
  Share,
  ToastAndroid
} from "react-native";

import {
  Divider,
  Input,
  Card,
  Dialog,
  ListItem,
  Header as HeaderRNE,
  HeaderProps,
  Icon,
  Button,
  Text,
  Switch
} from "react-native-elements";

import Speed from "./components/Speed";
import HeaderHome from "./components/HeaderHome";
import HeaderPages from "./components/HeaderPages";
import HeaderDash from "./components/HeaderDash";
import HomeScreen from "./screens/HomeScreen";
const Stack = createNativeStackNavigator();
const baseUrl = "http://api.tsdmotoboys.com.br/";

const ShareBase = () => {
  const onShare = async () => {
    Vibration.vibrate(2 * 1000);
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginTop: 50 }}>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};


function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {/*Páginas públicas*/}
        <Stack.Screen name="Home" title="WELCOME" component={HomeScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  view1:{
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          minHeight: "100%",
          paddingHorizontal: 20,
        },
  view2:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            marginTop: 20,
          },
  debug: {
    fontSize: 11,
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: "55%",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    height: "40%",
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
  container3: {
    height: "25%",
    width: "100%",
    alignItems: "center",
    alignContent: "space-between",
    color: "#fff",
    justifyContent: "space-between",
  },
  container4: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: "100%",
    height: "75%",
  },
  error: {
    color: "red",
    fontSize: 11,
  },
  bg: {
    height: "100%",
    justifyContent: "center",
    width: "100%",
    top: 0,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttom: {
    padding: 15,
    fontSize: 20,
    color: "#000",
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    marginTop: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 0,
  },
  input: {
    fontSize: 17,
    margin: 12,
    backgroundColor: "#C4C4C4",
    width: "60vw",
    padding: 15,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#397af8",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerWrapper: {
    borderBottomColor: "red",
    borderBottomWidth: 2,
    marginBottom: 30,
  },
});
export default App;