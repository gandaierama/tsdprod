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
import HeaderHome from "../components/HeaderHome";

import Speed from "../components/Speed";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <HeaderHome />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
          }}
        >
          <Button
            title="Cadastrar"
            onPress={() => navigation.navigate("Cadastro")}
            buttonStyle={{
              backgroundColor: "rgba(78, 116, 289, 1)",
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 30,
            }}
            type="solid"
          />

          <Button
            title="Login"
            onPress={() => navigation.navigate("Login")}
            buttonStyle={{
              backgroundColor: "rgba(78, 116, 289, 1)",
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 30,
            }}
            type="solid"
          />

          
        </View>
      </View>
      <Speed navigation={navigation} />
    </>
  );
};

export default HomeScreen;