import FormDataField from "../components/text-field/FormDataField.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
import RecipeDataField from "../components/text-field/RecipeDataField.jsx";
import React, {useContext, useState} from "react";
import Suggestions from "../components/Suggestions.jsx";
import Filter from "../components/Filter.jsx";
import {diets, europeanCuisines, foodCategories, mealTypes} from "../utils/filterOptions.js";
import RecipeTextArea from "../components/text-field/RecipeTextArea.jsx";
import postData from "../utils/postData.js";
import {useNavigate} from "react-router";
import {AuthContext} from "../App.jsx";


function CreateRecipePage() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const {token} = useContext(AuthContext);
    const [recipe, setRecipe] = useState({
        title: "",
        category: "",
        cuisine: "",
        diet: "",
        ingredients: "",
        instructions: "",
        meal_type: ""
    });
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await postData("http://localhost:3000/api/recipes", recipe, token);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    }
    const handleChange = (e) => {
        setRecipe({...recipe, [e.target.id]: e.target.value});
        console.log(recipe)
    }

    return (
        <main className="h-full min-h-screen flex flex-row bg-black text-white">
            <SideBar/>
            <form className={"w-3/4 flex flex-col gap-5 mt-15"} onSubmit={handleSubmit}>
                <RecipeDataField id={"title"} handleChange={handleChange} value={recipe.title}/>
                <RecipeDataField id={"ingredients"} handleChange={handleChange} value={recipe.ingredients}/>
                <RecipeTextArea id={"instructions"} handleChange={handleChange} value={recipe.instructions}/>
                <Filter options={diets} label={"Diet"} required={true} id={"diet"}
                        handleChange={handleChange}/>
                <Filter options={europeanCuisines} label={"Cuisines"} required={true} id={"cuisine"}
                        handleChange={handleChange}/>
                <Filter options={mealTypes} label={"Meal Type"} required={true} id={"meal_type"}
                        handleChange={handleChange}/>
                <Filter options={foodCategories} label={"Category"} required={true} id={"category"}
                        handleChange={handleChange}/>
                <p className={`select-none ${errorMessage === "" ? 'text-white' : 'text-red-600'} self-center`}>{errorMessage}</p>
                <button type="submit"
                        className="font-sans bg-blue-500 py-2 px-5 w-1/4 place-self-center rounded-sm hover:bg-blue-600 hover:text-white cursor-pointer hover:scale-x-105 transition-all">
                    Submit
                </button>
            </form>
            <Suggestions users={["Pesho", "Ivan", "Georgi", "Aleks", "Sasho"]}/>
        </main>
    );
}

export default CreateRecipePage;