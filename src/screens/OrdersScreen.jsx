import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import OrderItem from "../components/OrderItem";
import { useGetOrdersQuery } from "../services/shopServices";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

const OrdersScreen = () => {
  const { data, isLoading, error } = useGetOrdersQuery();
  const [orderData, setOrderData] = useState([]);
  const orderList = useSelector((state) => state.ordersReducer.ordersList);

  useEffect(() => {
    if (data) {
      const orders = Object.values(data);
      setOrderData([...orderData, ...orders]);
    }
  }, [data]);

  useEffect(() => {
    if (orderList) {
      setOrderData([...orderData, ...orderList]);
    }
  }, [orderList]);

  const renderOrderItem = ({ item }) => {
    return <OrderItem order={item} />;
  };

  return orderData.length === 0 ? (
    <View style={styles.orderEmptyContainer}>
      <MaterialCommunityIcons name="shopping-search" size={180} color="gray" />
      <Text style={styles.textOrderEmpty}>
        ¡Aún no has realizado ninguna compra!
      </Text>
      <Text style={styles.textOrderEmptySubtitle}>
        Compra productos y disfruta.
      </Text>
    </View>
  ) : (
    <View style={styles.listOrder}>
      <FlatList
        data={orderData}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.orderId}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  listOrder: {
    marginTop: 10,
  },
  orderEmptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textOrderEmpty: {
    fontFamily: "Outfit-Bold",
    marginTop: 15,
    marginBottom: 5,
    fontSize: 18,
  },
  textOrderEmptySubtitle: {
    fontFamily: "Outfit-Regular",
    marginBottom: 30,
    fontSize: 14,
  },
});
