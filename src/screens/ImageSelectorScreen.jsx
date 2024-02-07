import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../global/colors";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePicture } from "../features/authSlice";
import { usePutProfilePictureMutation } from "../services/shopServices";

const ImageSelectorScreen = ({ navigation }) => {
  const [image, setImage] = useState("");
  const localId = useSelector((state) => state.authReducer.localId);
  const [triggerSaveProfilePicture, result] = usePutProfilePictureMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    console.log("Permisos otorgados");
    return true;
  };

  const verifyGalleryPermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        return false;
      }
    }
    console.log("Permisos otorgados");
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    } else {
      console.log(
        "No se han otorgado los permisos necesarios para usar la cámara."
      );
    }
  };

  const pickImageFromGallery = async () => {
    const isGalleryOk = await verifyGalleryPermissions();
    if (isGalleryOk) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.base64}`);
      }
    } else {
      console.log(
        "No se han otorgado los permisos necesarios para acceder a la galería."
      );
    }
  };

  const confirmImage = () => {
    dispatch(setProfilePicture(image));
    triggerSaveProfilePicture({ image, localId });
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      {image ? (
        <View style={styles.containerImage}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={pickImageFromGallery}>
              <Text style={{ ...styles.btnText, ...styles.btnTextChoose }}>
                Abrir la galería
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.btn, ...styles.btnConfirm }}
              onPress={confirmImage}
            >
              <Text style={styles.btnText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.noImageContainer}>
          <MaterialIcons
            name="no-photography"
            size={200}
            color="#ccc"
            style={styles.iconPhotography}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={{ ...styles.btnAdd, ...styles.btn }}
              onPress={pickImage}
            >
              <Text style={{ ...styles.btnText, ...styles.btnTextChoose }}>
                Abrir cámara
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={pickImageFromGallery}
            >
              <Text style={styles.btnText}>Abrir galería</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ImageSelectorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  noImageContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  containerImage: {
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  iconPhotography: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#ccc",
  },
  btnAdd: {
    backgroundColor: colors.main,
    marginTop: 40,
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
    borderRadius: 18,
    paddingVertical: 12,
    width: "40%",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "Outfit-Bold",
    fontSize: 16,
    color: colors.white,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 250,
  },
  btn: {
    width: "40%",
    marginTop: 40,
    backgroundColor: colors.white,
    alignItems: "center",
    padding: 5,
    borderRadius: 20,
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: colors.main,
  },
  btnConfirm: {
    backgroundColor: colors.main,
  },
  btnTextChoose: {
    color: colors.main,
  },
});
