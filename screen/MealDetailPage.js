import { useLayoutEffect } from "react";
import { Button } from "react-native";
import MealDetail from "../components/MealDetail";


const MealDetailPage = ({route, navigation}) => {
    const meal = route.params.meal;

    // const headerButtonPressHandler = () => {
    //     console.log('Pressed!')
    //   }
    
    //   useLayoutEffect(() => {
    //     navigation.setOptions({
    //       headerRight: () => {
    //         return <Button onPress={headerButtonPressHandler} title="Tap me!"></Button>
    //       }
    //     })
    //   }, [navigation,headerButtonPressHandler ])

    return <MealDetail meal={meal}></MealDetail>
}

export default MealDetailPage;