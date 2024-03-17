import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const ReciepeRight = ({handleWantToCook}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        fetch('recipe-data.json')
        .then(res=> res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-[100%] lg:w-[60%] xl:w-[63%]">
            {
                recipes.map((recipe, indx)=> <RecipeCard key={indx} recipe={recipe} handleWantToCook={handleWantToCook}></RecipeCard>)
            }
        </div>
    );
};

export default ReciepeRight;