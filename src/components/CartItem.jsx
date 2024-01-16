import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import CardProduct from "./CardProduct";
import { Feather } from "@expo/vector-icons";
import { colors } from "../global/colors";

const CartItem = ({ item }) => {
  return (
    <CardProduct style={styles.cartItemContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.imageCartItem}
          resizeMode="cover"
          source={{ uri: item.thumbnail }}
        />
        <View>
          <Text style={styles.cartTitle}>{item.title}</Text>
          <Text style={styles.cartLightText}>{item.brand}</Text>
          <Text style={styles.cartText}>${item.price}</Text>
          <Text style={styles.cartTotalPrice}>
            Cantidad: {item.quantity}, Total: ${item.price * item.quantity}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={null} style={styles.trashCart}>
        <Feather name="trash-2" size={24} color="black" />
      </TouchableOpacity>
    </CardProduct>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },
  cartContenContainer: {
    flexDirection: "row",
  },
  imageCartItem: {
    height: 70,
    width: 70,
    marginRight: 10,
    borderRadius: 10,
  },
  trashCart: {
    alignItems: "stretch",
  },
  cartTitle: {
    fontFamily: "Outfit-Bold",
    textTransform: "capitalize",
    fontSize: 20,
  },
  cartLightText: {
    fontFamily: "Outfit-Regular",
    textTransform: "capitalize",
    fontSize: 15,
    color: colors.gray,
  },
  cartText: {
    fontFamily: "Outfit-Regular",
    textTransform: "capitalize",
    fontSize: 15,
  },
  cartTotalPrice: {
    fontFamily: "Outfit-Bold",
    textTransform: "capitalize",
    fontSize: 16,
    color: colors.main,
  },
});
