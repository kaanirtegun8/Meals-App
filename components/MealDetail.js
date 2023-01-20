import { View, Text, Image, StyleSheet, ScrollView } from "react-native";


const MealDetail = ({ meal }) => {
  return (
    <ScrollView style={styles.wrapper}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <View style={styles.content}>
        <Text style={styles.title}> {meal.title} </Text>

        <View style={styles.details}>
          <Text style={styles.detailText}>{meal.duration}m</Text>
          <Text style={styles.detailText}>{meal.complexity.toUpperCase()}</Text>
          <Text style={styles.detailText}>
            {meal.affordability.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.subTitle}>Ingredients</Text>
        <View style={styles.ingredientBox}>
          {meal.ingredients.map((ingredient) => (
            <Text key={ingredient} style={styles.ingredient}>
              {" "}
              {ingredient}{" "}
            </Text>
          ))}
        </View>
        <Text style={styles.subTitle}>Steps</Text>
        <View style={styles.stepWrapper}>
          {meal.steps.map((step) => (
            <Text key={step} style={styles.step}>
              {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20
  },
  content: {
    padding: 16,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 16,
  },
  detailText: {
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 22,
    marginBottom: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ingredientBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 16,
    overflow: "hidden",
    flexWrap: "wrap",
  },
  ingredient: {
    padding: 4,
    borderWidth: 2,
    borderColor: "purple",
    margin: 5,
    borderRadius: 8,
    backgroundColor: "pink",
    overflow: "hidden",
  },
  stepWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8

  },  
  step: {
    borderWidth: 2,
    borderColor: 'orange',
    backgroundColor: '#f0d000',
    fontSize: 14,
    margin: 4,
    padding: 8,
    borderRadius: 8,
    overflow: "hidden"
  },
});

export default MealDetail;
