import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../global/colors";

const Input = ({ label, isSecuryEntry = false, error = "", onChange }) => {
  const [input, setInput] = useState();

  const onHandleChangeText = (text) => {
    setInput(text);
    onChange(text);
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onHandleChangeText}
        secureTextEntry={isSecuryEntry}
        value={input}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    marginTop: 10,
    width: "70%",
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#ebebeb",
    color: colors.black,
    padding: 10,
  },
  label: {
    fontFamily: "Outfit-Bold",
    color: colors.black,
    paddingLeft: 5,
    marginBottom: 4,
  },
  error: {
    padding: 10,
    color: "#FF0000",
  },
});
