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



import Speed from "./components/Speed";
import HeaderHome from "./components/HeaderHome";
import HeaderPages from "./components/HeaderPages";
import HeaderDash from "./components/HeaderDash";


import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import CadastroScreen from "./screens/CadastroScreen";
import MotoboyScreen from "./screens/MotoboyScreen";



const Stack = createNativeStackNavigator();
const baseUrl = "http://api.tsdmotoboys.com.br/";
const Key = "Tsd@M07080y";



//////////////ONESIGNAL
function initOneSignalClient() {
  //OneSignal Init Code
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId(Constants.manifest?.extra?.oneSignalAppId);

  //Prompt for push on iOS
  OneSignal.promptForPushNotificationsWithUserResponse((response) => {
    console.log("Prompt response:", response);
  });

  //Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler(
    (notificationReceivedEvent) => {
      console.log(
        "OneSignal: notification will show in foreground:",
        notificationReceivedEvent
      );
      let notification = notificationReceivedEvent.getNotification();
      console.log("notification: ", notification);
      const data = notification.additionalData;
      console.log("additionalData: ", data);
      // Complete with null means don't show a notification.
      notificationReceivedEvent.complete(notification);
    }
  );

  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler((notification) => {
    console.log("OneSignal: notification opened:", notification);
  });
}
initOneSignalClient();
/////////////////////////////////


function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {/*Páginas públicas*/}
        <Stack.Screen name="Home" title="WELCOME" component={HomeScreen} />
        <Stack.Screen name="Cadastro" title="CADASTRO" component={CadastroScreen} />
        <Stack.Screen name="Login" title="Login" component={LoginScreen} />
        <Stack.Screen name="Motoboy" title="MOTOBOY" component={MotoboyScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;