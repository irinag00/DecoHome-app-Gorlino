import { StyleSheet, View } from "react-native";

const CardProduct = ({ children, style }) => {
  return (
    <View style={{ ...styles.productContainer, ...style }}>{children}</View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 1,
    borderRadius: 10,
  },
});
