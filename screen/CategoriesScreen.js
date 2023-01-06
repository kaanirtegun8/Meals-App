import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (itemData) => {
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color}></CategoryGridTitle>
}

const CategoriesScreen = () => {
  return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} />;
};

export default CategoriesScreen;
