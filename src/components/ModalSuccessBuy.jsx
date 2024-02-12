import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const ModalSuccessBuy = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View style={styles.containerModal}>
          <View style={styles.modalBtnClose}>
            <TouchableOpacity title="Cerrar" onPress={onClose}>
              <AntDesign name="close" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContainerText}>
            <FontAwesome name="check-circle-o" size={130} color="green" />
            <Text style={styles.textTitle}>¡Compra realizada con éxito!</Text>
            <Text style={styles.textSubtitle}>
              Hemos recibido correctamente el pago de su compra y tu solicitud
              ha sido aprobada.
            </Text>
            <Text style={styles.textSubtitle}>
              ¡Muchas gracias por confiar en nosotros!
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSuccessBuy;

const styles = StyleSheet.create({
  containerModal: {
    backgroundColor: "white",
    width: 350,
    height: 350,
    borderRadius: 10,
    alignItems: "center",
  },
  modalBtnClose: {
    position: "absolute",
    top: 20,
    right: 15,
  },
  modalContainerText: {
    alignItems: "center",
    marginTop: 30,
  },
  textTitle: {
    fontSize: 20,
    fontFamily: "Outfit-Bold",
    marginBottom: 20,
    marginTop: 10,
  },
  textSubtitle: {
    marginBottom: 10,
    marginHorizontal: 20,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Outfit-Regular",
  },
});
