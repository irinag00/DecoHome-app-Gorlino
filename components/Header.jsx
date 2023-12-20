import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  StatusBar,
} from "react-native";
import { colors } from "../global/colors";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
const Header = ({ title, navigation }) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor:
          title === "DetailProduct" ? colors.main : colors.backgroundApp,
      }}
    >
      {title === "Categories" ? (
        <View>
          <Text style={styles.headerTitle}>Bienvenido a</Text>
          <Text style={styles.headerNameShop}>Deco Home</Text>
        </View>
      ) : (
        <View style={styles.buttonIcon}>
          <Pressable onPress={navigation.goBack}>
            {title === "DetailProduct" ? (
              <Ionicons name="arrow-back-sharp" size={28} color="white" />
            ) : (
              <Ionicons name="arrow-back-sharp" size={28} color="black" />
            )}
          </Pressable>
        </View>
      )}
      <View style={styles.buttonIcon}>
        <Pressable onPress={null}>
          {title === "DetailProduct" ? (
            <MaterialCommunityIcons name="cart" size={28} color="white" />
          ) : (
            <MaterialCommunityIcons name="cart" size={28} color="black" />
          )}
        </Pressable>
      </View>
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
});
