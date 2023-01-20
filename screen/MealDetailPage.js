import MealDetail from "../components/MealDetail";


const MealDetailPage = ({route}) => {
    const mealId = route.params.mealId;
    return <MealDetail mealId={mealId}></MealDetail>
}

export default MealDetailPage;