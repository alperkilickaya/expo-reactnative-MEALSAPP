import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  const favoriteMealsctx = useContext(FavoritesContext);

  const favoritemMeals = favoriteMealsctx.ids.map((mealId) => {
    return MEALS.find((meal) => meal.id === mealId);
  });
  if (favoritemMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorites yet!</Text>
      </View>
    );
  }

  return <MealsList items={favoritemMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
