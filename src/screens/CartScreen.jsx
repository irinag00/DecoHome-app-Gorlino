import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
// import cart_data from "../data/cart_data.json";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopServices";

const CartScreen = () => {
  // const [total, setTotal] = useState();
  // useEffect(() => {
  //   const totalCart = cart_data.reduce(
  //     (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
  //     0
  //   );
  //   setTotal(totalCart);
  // }, []);
  const cartProducts = useSelector((state) => state.cartReducer.productsCart);
  const total = useSelector((state) => state.cartReducer.total);
  const [triggerPost, result] = usePostOrderMutation();

  const confirmCart = () => {
    triggerPost({ total, cartProducts, user: "LoggedUsed" });
  };

  const renderCartItem = ({ item }) => <CartItem item={item} />;

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartProducts}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPrice}> Total </Text>
        <Text style={styles.totalPrice}> ${total}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
          <Text style={styles.textConfirm}>Confirmar compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    marginTop: 10,
  },
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  totalPrice: {
    fontSize: 20,
    fontFamily: "Outfit-Bold",
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: colors.main,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 18,
    paddingVertical: 18,
    width: "80%",
    alignItems: "center",
  },
  textConfirm: {
    fontFamily: "Outfit-Bold",
    fontSize: 16,
    color: "#fff",
  },
});
