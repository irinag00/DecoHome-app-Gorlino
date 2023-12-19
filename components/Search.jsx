import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { colors } from "../global/colors";

const Search = ({ onSearchHandler }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const onSearchHandlerEvent = (searchInput) => {
    const regExpresion = /[^\w\s]/;
    if (regExpresion.test(search)) {
      setError("Solo se admiten caracteres alfanuméricos.");
      setSearch("");
    } else {
      setError("");
      onSearchHandler(searchInput);
    }
  };

  const onResetSearch = () => {
    setSearch(""), setError(""), onSearchHandler(search);
  };

  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={setSearch}
          placeholder="Buscar productos..."
          value={search}
        />
        <TouchableOpacity
          onPress={() => {
            onSearchHandlerEvent(search);
          }}
        >
          <Ionicons name="ios-search" size={24} color={colors.main} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onResetSearch}>
          <Entypo name="cross" size={24} color={colors.lightPink} />
        </TouchableOpacity>
      </View>
      {error ? (
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  searchInput: {
    width: "80%",
  },
  errorMessageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  errorText: {
    color: colors.main,
  },
});
