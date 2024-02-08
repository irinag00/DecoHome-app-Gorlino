import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../global/colors";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
const Header = ({ title, navigation }) => {
  const image = useSelector((state) => state.authReducer.profilePicture);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor:
          title === "DetailProduct" ? colors.main : colors.backgroundApp,
      }}
    >
      {title === "Categories" ? (
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.headerTitle}>Bienvenido a</Text>
            <Text style={styles.headerNameShop}>Deco Home</Text>
          </View>
          <View>
            {image ? (
              <Image
                source={{ uri: image }}
                style={styles.profilePicture}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require("../../assets/img/user.png")}
                style={styles.profilePicture}
                resizeMode="contain"
              />
            )}
          </View>
        </View>
      ) : (
        <View style={styles.buttonIcon}>
          {title != "SignUp" && title != "Login" ? (
            <Pressable onPress={navigation.goBack}>
              {title === "DetailProduct" ? (
                <Ionicons name="arrow-back-sharp" size={28} color="white" />
              ) : (
                <Ionicons name="arrow-back-sharp" size={28} color="black" />
              )}
            </Pressable>
          ) : null}
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerTitle: {
    fontSize: 25,
    fontFamily: "Outfit-Bold",
    paddingTop: 30,
    fontWeight: "700",
  },
  headerNameShop: {
    fontSize: 38,
    fontFamily: "Outfit-Bold",
    color: colors.main,
  },
  buttonIcon: {
    marginTop: 30,
  },
  titleLoginAndSignUp: {
    fontSize: 25,
    fontFamily: "Outfit-Bold",
    marginBottom: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 45,
    backgroundColor: "#E8E8E8",
    position: "absolute",
    left: 100,
  },
});
