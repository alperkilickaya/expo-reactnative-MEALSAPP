import React from "react";
import { Text, View, StyleSheet } from "react-native";

const List = ({ data, steps }) => {
  const dataDetail = data;
  console.log(data);
  return data.map((dataPoint, index) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>
        {steps && `${index + 1} - `} {dataPoint}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#efc4c4",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
