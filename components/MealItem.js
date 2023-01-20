import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Pressable,
} from "react-native";

const MealItem = ({ meal, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={ ({pressed}) => [styles.innerContainer, pressed ? styles.pressed : null]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
          <View>
            <Image style={styles.image} source={{ uri: meal.imageUrl }}></Image>
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailText}>{meal.duration}m</Text>
            <Text style={styles.detailText}>
              {meal.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailText}>
              {meal.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressed: {
    opacity: 0.50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 18,
    margin: 8,
  },
  innerContainer: {
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 8,
  },
  detailText: {
    fontSize: 14,
  },
});

export default MealItem;
