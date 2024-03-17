import React from 'react';

const RecipeCooking = ({recipe, slNumber}) => {
    return (
        <tr className="bg-[#28282808]">
            <td className=" p-1 sm:p-2 sm:text-sm text-xs">{slNumber}</td>
            <td className=" p-1 sm:p-2 sm:text-sm text-xs">{recipe.recipe_name}</td>
            <td className=" p-1 sm:p-2 sm:text-sm text-xs">{recipe.preparing_time} minutes</td>
            <td className=" p-1 sm:p-2 sm:text-sm text-xs">{recipe.calories} calories</td>
        </tr>
    );
};

export default RecipeCooking;