import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#efc4c4",
    borderBottomWidth: 1,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitle: {
    color: "#efc4c4",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
