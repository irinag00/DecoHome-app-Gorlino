import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "../components/Input";
import { colors } from "../global/colors";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, result] = useLoginMutation();
  const dispach = useDispatch();
  const image = {
    uri: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1705697788/backgroundLogin_keiwxy.jpg",
  };

  const onSubmit = () => {
    triggerLogin({ email, password });
  };

  useEffect(() => {
    if (result.data) {
      dispach(setUser(result.data));
    }
  }, [result]);

  return (
    <View style={styles.singUpContainer}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.containerNameShop}>
          <Text style={styles.headerTitle}>Bienvenido a</Text>
          <Text style={styles.headerNameShop}>Deco Home</Text>
        </View>
        <Text style={styles.titleAccount}>Iniciar Sesión</Text>
        <Input label="Email" onChange={setEmail} />
        <Input label="Contraseña" onChange={setPassword} isSecuryEntry={true} />
        <TouchableOpacity style={styles.btnLogin} onPress={onSubmit}>
          <Text style={styles.textBtnLogin}>Ingresar</Text>
        </TouchableOpacity>
        <View style={styles.containerText}>
          <Text style={styles.subtitle}>¿Aún no tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.linkLogin}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  singUpContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  linkLogin: {
    color: colors.main,
    fontFamily: "Outfit-Bold",
    fontSize: 15,
  },
  containerText: {
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontFamily: "Outfit-Bold",
    fontWeight: "700",
  },
  headerNameShop: {
    fontSize: 38,
    fontFamily: "Outfit-Bold",
    color: colors.main,
  },
  containerNameShop: {
    alignItems: "center",
    marginBottom: 20,
  },
  titleAccount: {
    fontFamily: "Outfit-SemiBold",
    fontSize: 20,
  },
  btnLogin: {
    backgroundColor: colors.main,
    padding: 10,
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 10,
    borderRadius: 18,
    paddingVertical: 18,
    width: "80%",
    alignItems: "center",
  },
  textBtnLogin: {
    fontFamily: "Outfit-Bold",
    fontSize: 16,
  },
  subtitle: {
    fontFamily: "Outfit-Regular",
    fontSize: 15,
  },
});
