import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meals) => {
    return meals.categoryIds.includes(catId)
  })

  


  const renderMealItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealDetailPage',{
        meal: itemData.item
      })
    }

    return <MealItem meal={itemData.item} onPress={pressHandler}></MealItem>
  }

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(meals) => meals.id } renderItem={renderMealItem}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
