import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../global/colors";
import { AntDesign } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Bienvenido a</Text>
        <Text style={styles.headerNameShop}>Deco Home</Text>
      </View>
      <View style={styles.buttonIcon}>
        <Pressable onPress={null}>
          <AntDesign name="shoppingcart" size={28} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "space-between",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: "Outfit-Bold",
    paddingTop: 30,
    fontWeight: "700",
  },
  headerNameShop: {
    fontSize: 38,
    fontWeight: "bold",
    fontFamily: "Outfit-Bold",
    color: colors.main,
  },
  buttonIcon: {
    marginTop: 30,
  },
});
