const RecipePreparing = ({recipe, slNumber, handlePreparing}) => {
    return (
        <tr className="bg-[#28282808]">
            <td className="p-1 sm:p-2 text-[10px] sm:text-sm">{slNumber + 1}</td>
            <td className="p-1 sm:p-2 text-[10px] sm:text-sm">{recipe.recipe_name}</td>
            <td className="p-1 sm:p-2 text-[10px] sm:text-sm">{recipe.preparing_time} min</td>
            <td className="p-1 sm:p-2 text-[10px] sm:text-sm">{recipe.calories} calories</td>
            <td onClick={()=>{handlePreparing(recipe)}} className=" p-2 text-[10px] sm:text-sm"><button className="bg-[#0BE58A] text-[#150B2B] rounded-2xl py-1 px-1 sm:px-3 font-lexend">Preparing</button></td>
        </tr>
    );
};

export default RecipePreparing;