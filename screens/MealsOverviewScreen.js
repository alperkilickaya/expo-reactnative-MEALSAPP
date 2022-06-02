import React, { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data.js";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList.js";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // to change title immediately we use useLayoutEffect
  // to avoid update state warning we use useLayoutEffect
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (catItem) => catItem.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
