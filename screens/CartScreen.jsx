import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import cart_data from "../data/cart_data.json";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";

const CartScreen = () => {
  const [total, setTotal] = useState();
  useEffect(() => {
    const totalCart = cart_data.reduce(
      (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
      0
    );
    setTotal(totalCart);
  }, []);
  const renderCartItem = ({ item }) => <CartItem item={item} />;

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart_data}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <Text style={styles.totalPrice}>Total: ${total}</Text>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.confirmButton}>
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
