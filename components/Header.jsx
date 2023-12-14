import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../global/colors";
import { AntDesign } from "@expo/vector-icons";
const Header = ({ title, onReturnHome }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Pressable onPress={onReturnHome}>
        <AntDesign name="home" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.main,
    padding: 30,
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Outfit-Bold",
    paddingTop: 10,
  },
});
