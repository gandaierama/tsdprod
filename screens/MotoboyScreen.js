import {
  Pressable,
  Vibration,
  ScrollView,
  PermissionsAndroid,
  Dimensions,
  SafeAreaView,
  Alert,
  TextInput,
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
  Icon,
  Button,
  Text,
  Switch
} from "react-native-elements";
import HeaderPages from "../components/HeaderPages";


const MotoboyScreen = ({ navigation }) => {
   const [sucesso, setSucesso] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.tsdmotoboys.com.br/motoboy`;

  async function submitCad(event) {
    event.preventDefault();
    Vibration.vibrate(2 * 1000);
    console.log("foi");

    console.log(nome);
    const   senhaCrypto = MD5(senha);
    const valCad = JSON.stringify({
      name: nome,
      email: email,
      senha: senhaCrypto,
      cpf: cpf,
      endereco: '',
      telefone: '',
      latitude: '',
      longitude: '',
      bairro: '',
      cidade: '',
      estado: '',
      numero: '',
    });

    try {
      const requestOptions = {
        method: "POST",
        body: valCad,
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      };

      console.log(requestOptions);
      const response = await fetch(url, requestOptions).then((response) =>
        response.json()
      );

      setSucesso(true);
      const res = response;

      console.log(res);
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View>
      <HeaderPages title="Cadastro de Motoboy" />
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
            paddingHorizontal: 20,
          }}
        >
          {sucesso === false && (
            <>
              <Input
                onChangeText={setNome}
                placeholder="Digite seu nome"
                className={styles.input}
                name="nome"
                value={nome}
                style={{ width: "100%", marginTop: 50 }}
              />

              <Input
                onChangeText={setCpf}
                name="cpf"
                value={cpf}
                placeholder="Digite seu cpf"
                className={styles.input}
              />

              <Input
                placeholder="Digite seu email"
                name="email"
                value={email}
                onChangeText={setEmail}
                className={styles.input}
              />

              <Input
                placeholder="Digite sua senha"
                name="senha"
                value={senha}
                onChangeText={setSenha}
                className={styles.input}
              />

              <Button
                title="Cadastrar"
                onPress={submitCad}
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
            </>
          )}

          {sucesso === true && (
            <>
              <Text>Cadastro efetuado com sucesso!!!</Text>
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
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
export default MotoboyScreen;