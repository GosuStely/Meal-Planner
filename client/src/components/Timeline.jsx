import React, {createContext, useContext, useEffect, useState} from 'react';
import Post from "./Post.jsx";
import PostFilter from "./PostFilter.jsx";
import {AuthContext} from "../App.jsx";
import {useNavigate} from "react-router";
import {prodURL} from "../utils/urls.js";


function Timeline() {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const {token} = useContext(AuthContext);


    useEffect(() => {
        if (!token) {
            alert("You have logged out");
            navigate("/login");
            return;
        }
        const fetchRecipes = async () => {
            const response = await fetch(`${prodURL}/api/recipes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            console.log(data)
            if (!response.ok) {
                alert(data.message);
                return;
            }
            setRecipes(data);
            setFilteredRecipes(data);
        }
        fetchRecipes()

    }, []);

    return (
            <section className={"w-3/4 flex flex-col place-items-center"}>
                <PostFilter recipes={recipes} handleFilter={setFilteredRecipes}/>
                {filteredRecipes.map((recipe) => (<Post key={recipe.id} recipe={recipe} id={recipe.id}/>))}
            </section>
    );
}

export default Timeline;