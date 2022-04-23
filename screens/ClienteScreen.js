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
import HeaderPages from "../components/HeaderPages";


const ClienteScreen = ({ navigation }) => {
  return (
    <View>
      <HeaderPages title="Cadastro" />
      <View
        className={styles.view1}
      >
        <View
          className={styles.view2}
        >
          <ScrollView>
           
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ClienteScreen;