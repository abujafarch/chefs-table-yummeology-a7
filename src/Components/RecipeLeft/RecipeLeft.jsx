import RecipeCooking from "./RecipeCooking";
import RecipePreparing from "./RecipePreparing";


const RecipeLeft = ({preparingRecipes, handlePreparing, currentlyCooking, totalMin,totalCal}) => {
    return (
        <div className="sm:py-8 py-4 xl:px-6 sm:px-4 px-0 border-[1px] border-[#28282833] rounded-2xl w-[100%] lg:w-[40%] xl:w-[37%] h-fit">
            <h1 className="text-[#282828] font-semibold text-xl sm:text-2xl font-lexend text-center">Want to Cook:  {preparingRecipes.length}</h1>
            <hr className="my-4"/>
            <div className="w-full">
                <table className="w-full text-left text-[#878787] font-fira">
                    <tr className="font-light">
                        <th className="p-1 sm:p-2 sm:text-base text-xs font-medium w-[2%]"> </th>
                        <th className="p-1 sm:p-2 sm:text-base text-xs font-medium w-[40%]">Name</th>
                        <th className="p-1 sm:p-2 sm:text-base text-xs font-medium">Time</th>
                        <th className="p-1 sm:p-2 sm:text-base text-xs font-medium">Calories</th>
                        <th className="p-1 sm:p-2 sm:text-base text-xs font-medium"></th>
                    </tr>
                    {
                        preparingRecipes.map((recipe,indx) => <RecipePreparing key={indx} slNumber={indx} recipe={recipe} handlePreparing = {handlePreparing}></RecipePreparing>)
                    }
                </table>

                <h1 className="text-[#282828] font-semibold text-xl sm:text-2xl font-lexend text-center mt-8 mb-4">Currently cooking: {currentlyCooking.length}</h1>
                <hr className="mb-6"/>
                <table className="w-full text-left text-[#878787] font-fira">
                    <tr className="font-light">
                        <th className=" p-1 sm:p-2 sm:text-base text-xs font-medium w-[2%]"> </th>
                        <th className=" p-1 sm:p-2 sm:text-base text-xs font-medium w-[46%]">Name</th>
                        <th className=" p-1 sm:p-2 sm:text-base text-xs font-medium">Calories</th>
                        <th className=" p-1 sm:p-2 sm:text-base text-xs font-medium">Time</th>
                    </tr>
                    {
                        currentlyCooking.map((recipe, indx) => <RecipeCooking key={indx} slNumber = {indx + 1} recipe ={recipe}></RecipeCooking>)
                    }
                    {/* <TotalMinCal currentlyCooking = {currentlyCooking}></TotalMinCal> */}
                    <tr className="text-[#282828CC] font-medium">
                        <td className=" p-1 sm:p-2 sm:text-sm text-xs"></td>
                        <td className=" p-1 sm:p-2 sm:text-sm text-xs"></td>
                        <td className=" p-1 sm:p-2 sm:text-sm text-xs">Total Time = <br/> {totalMin} min</td>
                        <td className=" p-1 sm:p-2 sm:text-sm text-xs">Total calories = <br/>{totalCal} cal </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default RecipeLeft;