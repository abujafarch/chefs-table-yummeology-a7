import { useState } from "react";
import RecipeLeft from "../RecipeLeft/RecipeLeft";
import ReciepeRight from "../RecipeRight/ReciepeRight";

const OurRecipe = () => {
    const [preparingRecipes, setPreparingRecipes] = useState([])
    const [currentlyCooking, setCurrentlyCooking] = useState([])
    const [totalMin, setTotalMin] = useState(0)
    const [totalCal, setTotalCal] = useState(0)
    const handleWantToCook = (recipe) =>{
        const newPreparingRecipes = [...preparingRecipes, recipe]
        setPreparingRecipes(newPreparingRecipes)
    }
    const handlePreparing = (recipeE) =>{
        const filteredPreparingRecipes = preparingRecipes.filter((singleRecipe)=>singleRecipe.recipe_id!== recipeE.recipe_id)
        setPreparingRecipes(filteredPreparingRecipes)
        const newCurrentlyCooking = preparingRecipes.filter((singleRecipe)=> singleRecipe.recipe_id === recipeE.recipe_id)
        setTotalMin(newCurrentlyCooking[0].preparing_time + totalMin)
        setTotalCal(newCurrentlyCooking[0].calories + totalCal)
        setCurrentlyCooking([...newCurrentlyCooking, ...currentlyCooking])
        // const {preparing_time} = newCurrentlyCooking[0]
        // console.log(preparing_time)
    }
    return (
        <div className="md:mt-24 sm:mt-8 mt-5">
            <div className="font-lexend text-center">
                <h1 className="text-center text-3xl sm:text-[40px] font-semibold text-[#150B2B] mb-2 sm:mb-6">Our Recipe</h1>
                <p className="text-[#150B2B99] max-w-[820px] mx-auto sm:mb-8 mb-4 md:mb-12">There are millions of recipe that will give a different level test every single recipe. So find your favorite recipe from Yoummeology and enjoy test like Utopia Empire's Foods.</p>
            </div>
            <div className="flex gap-4 xl:gap-10 justify-between lg:flex-row flex-col">
                <ReciepeRight handleWantToCook={handleWantToCook}></ReciepeRight>
                <RecipeLeft preparingRecipes={preparingRecipes} handlePreparing={handlePreparing} currentlyCooking = {currentlyCooking} totalMin={totalMin} totalCal = {totalCal}></RecipeLeft>
            </div>
        </div>
    );
};

export default OurRecipe;