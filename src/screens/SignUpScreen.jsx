import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import Input from "../components/Input";
import { colors } from "../global/colors";
import { useState, useEffect } from "react";
import { useSignUpMutation } from "../services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";
import { signupSchema } from "../validations/signupSchema";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const dispach = useDispatch();
  const [triggerSignUp, result] = useSignUpMutation();
  const image = {
    uri: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1705697788/backgroundLogin_keiwxy.jpg",
  };

  const onSubmit = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    try {
      signupSchema.validateSync(
        { email, password, confirmPassword },
        { abortEarly: false }
      );
      triggerSignUp({ email, password });
    } catch (error) {
      // console.log(error.errors);
      error.errors.map((e) => {
        const customError = Object.values(e)[0];
        switch (Object.keys(e)[0]) {
          case "empty_email":
            setEmailError(customError);
          case "invalid_email":
            setEmailError(customError);
          case "empty_password":
            setPasswordError(customError);
          case "invalid_password":
            setPasswordError(customError);
          case "empty_confirm_password":
            setConfirmPasswordError(customError);
          case "invalid_match_password":
            setConfirmPasswordError(customError);
          default:
            break;
        }
      });
    }
  };

  useEffect(() => {
    if (result.data) {
      dispach(setUser(result.data));
    }
  }, [result]);

  return (
    <KeyboardAvoidingView style={styles.singUpContainer} behavior="height">
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.containerNameShop}>
          <Text style={styles.headerTitle}>Bienvenido a</Text>
          <Text style={styles.headerNameShop}>Deco Home</Text>
        </View>
        <Text style={styles.titleAccount}>Crea una cuenta</Text>
        <Input label="Email" onChange={setEmail} error={emailError} />
        <Input
          label="Contraseña"
          onChange={setPassword}
          isSecuryEntry={true}
          error={passwordError}
        />
        <Input
          label="Repetir contraseña"
          onChange={setConfirmPassword}
          isSecuryEntry={true}
          error={confirmPasswordError}
        />
        <TouchableOpacity style={styles.btnSignUp} onPress={onSubmit}>
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
    </KeyboardAvoidingView>
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
