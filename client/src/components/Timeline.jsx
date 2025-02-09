import React, {createContext, useContext, useEffect, useState} from 'react';
import Post from "./Post.jsx";
import PostFilter from "./PostFilter.jsx";
import {AuthContext} from "../App.jsx";
import {useNavigate} from "react-router";

const RecipesContext = createContext(null);

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
            const response = await fetch("http://localhost:3000/api/recipes", {
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
        <RecipesContext.Provider value={{recipes,setFilteredRecipes}}>
            <section className={"w-3/4 flex flex-col place-items-center"}>
                <PostFilter/>
                {filteredRecipes.map((recipe, index) => (<Post key={recipe.id} recipe={recipe} id={recipe.id}/>))}
            </section>
        </RecipesContext.Provider>
    );
}

export default Timeline;