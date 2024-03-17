import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RecipeCard = ({recipe, handleWantToCook}) => {
    const [wantToCook, setWantToCook] = useState(true)
    return (
        <div className="border-[1px] border-[#28282833] rounded-2xl p-4 xl:p-6">
            <img src={recipe.recipe_image} alt="Hello" className="rounded-2xl" />
            <h1 className="font-semibold text-xl text-[#282828] font-lexend mt-6 mb-4">{recipe.recipe_name}</h1>
            <p className="text-[#878787] font-fira mb-4">{recipe.short_description}</p>
            <hr  className="mb-6"/>
            <h3 className="text-[#282828] font-medium text-lg mb-4">Ingredients: {recipe.ingredients.length}</h3>
            <div className="ml-5">
                <ul className="text-[#878787] text-lg list-disc">
                    {
                        recipe.ingredients.map((ingredient, indx)=> <li key={indx}>{ingredient}</li>)
                    }
                </ul>
            </div>
            <hr className="mt-4 mb-6"/>
            <div className="flex gap-9 items-center text-[#282828CC] mb-6">
                <p className="flex items-center gap-2"><IoTimeOutline></IoTimeOutline> {recipe.preparing_time} min</p>
                <p className="flex items-center gap-2"><FaFire></FaFire> {recipe.calories} Calories</p>
            </div>
            <div>
                <button onClick={()=>{
                    if(wantToCook === true){
                        handleWantToCook(recipe)
                        setWantToCook(false);
                    }
                    else if(wantToCook === false){
                        toast('✔️ Already Added to Want to Cook')
                    }

                }} className="text-lg px-6 py-3 bg-[#0BE58A] rounded-[50px] font-medium text-[#150B2B]">Want to Cook</button>
                <ToastContainer></ToastContainer>
            </div>    
        </div>
    );
};

export default RecipeCard;