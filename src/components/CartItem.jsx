import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import CardProduct from "./CardProduct";
import { Feather } from "@expo/vector-icons";
import { colors } from "../global/colors";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToCart, removeProduct, removeToCart } from "../features/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const onAddProduct = () => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };
  const onRemoveQuantityProduct = () => {
    dispatch(removeToCart({ ...item, quantity: 1 }));
  };
  const onRemoveProduct = () => {
    dispatch(removeProduct({ id: item.id }));
  };
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
          <Text style={styles.cartText}>{item.stock} disponibles</Text>
          <Text style={styles.cartPrice}>$ {item.price}</Text>
        </View>
      </View>
      <View style={styles.trashIconContainer}>
        <TouchableOpacity onPress={onRemoveProduct}>
          <Feather name="trash-2" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.cartQuantity}>{item.quantity}</Text>
        <View style={styles.actionBtn}>
          {item.quantity > 1 ? (
            <TouchableOpacity onPress={onRemoveQuantityProduct}>
              <AntDesign name="minus" size={20} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity disabled={true}>
              <AntDesign name="minus" size={20} color="white" />
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={onAddProduct}>
            <AntDesign name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
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
    marginBottom: 15,
    marginHorizontal: 15,
  },
  imageCartItem: {
    height: 70,
    width: 70,
    marginRight: 15,
    borderRadius: 10,
  },
  cartTitle: {
    fontFamily: "Outfit-Bold",
    textTransform: "capitalize",
    fontSize: 16,
    width: "80%",
  },
  cartLightText: {
    fontFamily: "Outfit-Regular",
    textTransform: "capitalize",
    fontSize: 15,
    color: colors.gray,
  },
  cartText: {
    fontFamily: "Outfit-Regular",
    fontSize: 13,
  },
  cartPrice: {
    fontFamily: "Outfit-Bold",
    textTransform: "capitalize",
    fontSize: 18,
  },
  cartTotalPrice: {
    fontFamily: "Outfit-Bold",
    textTransform: "capitalize",
    fontSize: 16,
    color: colors.main,
  },
  cartQuantity: {
    marginBottom: 5,
    fontFamily: "Outfit-Bold",
    fontSize: 17,
  },
  trashIconContainer: {
    position: "absolute",
    top: 20,
    right: 15,
  },
  quantityContainer: {
    position: "absolute",
    right: 40,
    alignItems: "center",
    top: 42,
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: colors.main,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
  },
});
