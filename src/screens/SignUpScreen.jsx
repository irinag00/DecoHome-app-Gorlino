import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "../components/Input";
import { colors } from "../global/colors";

const SignUpScreen = ({ navigation }) => {
  const image = {
    uri: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1705697788/backgroundLogin_keiwxy.jpg",
  };
  return (
    <View style={styles.singUpContainer}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.containerNameShop}>
          <Text style={styles.headerTitle}>Bienvenido a</Text>
          <Text style={styles.headerNameShop}>Deco Home</Text>
        </View>
        <Text style={styles.titleAccount}>Crea una cuenta</Text>
        <Input label="Email" />
        <Input label="Contraseña" />
        <Input label="Repetir contraseña" />
        <TouchableOpacity style={styles.btnSignUp}>
          <Text style={styles.textBtnSignUp}>Registrarme</Text>
        </TouchableOpacity>
        <View style={styles.containerText}>
          <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.linkLogin}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

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
  btnSignUp: {
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
  textBtnSignUp: {
    fontFamily: "Outfit-Bold",
    fontSize: 16,
  },
  subtitle: {
    fontFamily: "Outfit-Regular",
    fontSize: 15,
  },
});
