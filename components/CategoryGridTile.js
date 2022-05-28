import React from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        // to make press feedback work on ios, we need to add this
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 8,
    //for android shadow effect use elevation
    elevation: 4,
    //to make shadow work on ios we have to add backgroundColor
    backgroundColor: "white",
    // to make shadow effect work on ios.
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    //to make sure ripple effect does not go beyond the corners. But this will disapper the shadow on ios
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
