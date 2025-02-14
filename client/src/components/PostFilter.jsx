import React, {useEffect, useState} from 'react';
import Filter from "./Filter.jsx";
import {diets, europeanCuisines, foodCategories, mealTypes} from "../utils/filterOptions.js";

function PostFilter({recipes, handleFilter}) {
    const [filter, setFilter] = useState({
        diet: "",
        cuisine: "",
        mealType: "",
        category: ""
    });
    useEffect(() => {
        const filterItems = () => {
            let filteredRecipes = recipes;
            if (filter.diet !== ""){
                filteredRecipes = filteredRecipes.filter((item) => item.diet === filter.diet);
            }
            if (filter.cuisine !== ""){
                filteredRecipes = filteredRecipes.filter((item) => item.cuisine === filter.cuisine);
            }
            if (filter.mealType !== ""){
                filteredRecipes = filteredRecipes.filter((item) => item.meal_type === filter.mealType);
            }
            if (filter.category !== ""){
                filteredRecipes = filteredRecipes.filter((item) => item.category === filter.category);
            }
            handleFilter(filteredRecipes);
        }
        filterItems();
    }, [filter]);

    const handleChange = e => {
        setFilter({...filter, [e.target.id]: e.target.value});
    }

    return (
        <div className="flex gap-5 mx-30 my-5">
            <Filter options={diets} label={"Filter by Diet"} id={"diet"} handleChange={handleChange}/>
            <Filter options={europeanCuisines} label={"Filter by Cuisines"} id={"cuisine"} handleChange={handleChange}/>
            <Filter options={mealTypes} label={"Filter by Meal Type"} id={"mealType"} handleChange={handleChange}/>
            <Filter options={foodCategories} label={"Filter by Category"} id={"category"} handleChange={handleChange}/>
        </div>
    );
}

export default PostFilter;