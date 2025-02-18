import React, {useEffect, useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {pink} from "@mui/material/colors";
import {useNavigate} from "react-router";
import {prodURL} from "../utils/urls.js";

function Post({recipe,id}) {
    //da se napravi Like component v koito da se sloji logikata ot tuka
    const [likeState, setLikeState] = useState(false)
    const [loading,setLoading] = useState(false);
    const [likes,setLikes] = useState([]);
    const likeIcon = likeState ? <FavoriteIcon sx={{color: pink[500]}}/> :<FavoriteBorderIcon />
    const token = localStorage.getItem("token");

    useEffect(() => {
        const getLikes = async () =>{
            try{
                const response = await fetch(`${prodURL}/api/likes/${id}`,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await response.json();
                console.log(data);
                if (!response.ok){
                    alert(data.message);
                }
                setLikes(data.likes);
                if (data.likes.some(like => like.username === data.senderUsername)){
                    console.log("yes")
                    setLikeState(true);
                }
            }catch (e){
                console.log(e)
            }
        };
        getLikes();
    }, []);

    const dietColorMap = new Map();
    dietColorMap.set("Vegetarian","bg-[#A3D977] text-[#2F4E2F]");
    dietColorMap.set("Vegan","bg-[#87C38F] text-[#1B5E20]");
    dietColorMap.set("Gluten-Free","bg-[#FFD700] text-[#5A3700]");
    dietColorMap.set("Dairy-Free","bg-[#F8E9A1] text-[#6B4226]");
    dietColorMap.set("Keto","bg-[#B39DDB] text-[#311B92]");
    dietColorMap.set("Paleo","bg-[#D4A373] text-[#5C4033]");
    dietColorMap.set("Low-Carb","bg-[#B2EBF2] text-[#00796B]");
    dietColorMap.set("High-Protein","bg-[#FFC107] text-[#4E342E]"); // Yellow, black text

    const cuisineColorMap = new Map();
    cuisineColorMap.set("Albanian Cuisine", "bg-[#E41C23] text-[#FFFFFF]"); // Dark red, white text
    cuisineColorMap.set("Andorran Cuisine", "bg-[#004E98] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("Armenian Cuisine", "bg-[#F4A300] text-[#000000]"); // Orange, black text
    cuisineColorMap.set("Austrian Cuisine", "bg-[#D61C2F] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Azerbaijani Cuisine", "bg-[#1C8D3B] text-[#FFFFFF]"); // Green, white text
    cuisineColorMap.set("Belarusian Cuisine", "bg-[#E50000] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Belgian Cuisine", "bg-[#FFCD00] text-[#000000]"); // Yellow, black text
    cuisineColorMap.set("Bosnian Cuisine", "bg-[#0066B3] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("Bulgarian Cuisine", "bg-[#009639] text-[#FFFFFF]"); // Green, white text
    cuisineColorMap.set("Croatian Cuisine", "bg-[#C8102E] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Cypriot Cuisine", "bg-[#FFCC00] text-[#000000]"); // Yellow, black text
    cuisineColorMap.set("Czech Cuisine", "bg-[#D52B1E] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Danish Cuisine", "bg-[#C8102E] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Estonian Cuisine", "bg-[#0072CE] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("Finnish Cuisine", "bg-[#009CDE] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("French Cuisine", "bg-[#0055A4] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("Georgian Cuisine", "bg-[#E2001A] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("German Cuisine", "bg-[#000000] text-[#FFFFFF]"); // Black, white text
    cuisineColorMap.set("Greek Cuisine", "bg-[#0D5E89] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("Hungarian Cuisine", "bg-[#E30A17] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Icelandic Cuisine", "bg-[#006C99] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("Irish Cuisine", "bg-[#169B3B] text-[#FFFFFF]"); // Green, white text
    cuisineColorMap.set("Italian Cuisine", "bg-[#008C45] text-[#FFFFFF]"); // Green, white text
    cuisineColorMap.set("Kosovar Cuisine", "bg-[#F7C925] text-[#000000]"); // Yellow, black text
    cuisineColorMap.set("Latvian Cuisine", "bg-[#9E2A2F] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Liechtenstein Cuisine", "bg-[#00205B] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("Lithuanian Cuisine", "bg-[#F1C800] text-[#000000]"); // Yellow, black text
    cuisineColorMap.set("Luxembourgish Cuisine", "bg-[#F30D2E] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Maltese Cuisine", "bg-[#F1A7A5] text-[#000000]"); // Red, black text
    cuisineColorMap.set("Moldovan Cuisine", "bg-[#FCD116] text-[#000000]"); // Yellow, black text
    cuisineColorMap.set("Monegasque Cuisine", "bg-[#E1001A] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Montenegrin Cuisine", "bg-[#9E2A2F] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Dutch Cuisine", "bg-[#21468B] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("Macedonian Cuisine", "bg-[#F0C100] text-[#000000]"); // Yellow, black text
    cuisineColorMap.set("Norwegian Cuisine", "bg-[#BA0C2F] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Polish Cuisine", "bg-[#D50032] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Portuguese Cuisine", "bg-[#006747] text-[#FFFFFF]"); // Green, white text
    cuisineColorMap.set("Romanian Cuisine", "bg-[#FCD116] text-[#000000]"); // Yellow, black text
    cuisineColorMap.set("Sammarinese Cuisine", "bg-[#0093D0] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("Serbian Cuisine", "bg-[#C8102E] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Slovak Cuisine", "bg-[#0D5E8C] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("Slovenian Cuisine", "bg-[#1D7E6D] text-[#FFFFFF]"); // Green, white text
    cuisineColorMap.set("Spanish Cuisine", "bg-[#AA151B] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Swedish Cuisine", "bg-[#006AA7] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("Swiss Cuisine", "bg-[#D50032] text-[#FFFFFF]"); // Red, white text
    cuisineColorMap.set("Ukrainian Cuisine", "bg-[#005BBB] text-[#FFFFFF]"); // Blue, yellow text
    cuisineColorMap.set("British Cuisine", "bg-[#00247D] text-[#FFFFFF]"); // Blue, white text
    cuisineColorMap.set("Vatican Cuisine", "bg-[#F5C500] text-[#000000]"); // Yellow, black text

    const handleLike = async() =>{
        setLoading(true);
        if (likeState){
            await dislikePost()
        } else{
            await likePost()
        }
        setLoading(false);
        console.log(likes);

    }
    const likePost = async() =>{
        try{
            const response = await fetch(`http://localhost:3000/api/likes/${id}`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            console.log(data);
            if (!response.ok){
                alert(data.message);
                setLoading(false);
            }
            setLikeState(true);
            setLikes([...likes,data]);
        }catch (e){
            console.log(e)
        }
    }
    const dislikePost = async() =>{
        try{
            const response = await fetch(`http://localhost:3000/api/likes/${id}`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            console.log(data);
            if (!response.ok){
                alert(data.message);
                setLoading(false);
            }
            setLikeState(false);
            setLikes(likes.filter(like => like.username !== data.senderUsername));
        }catch (e){
            console.log(e)
        }
    }


    return (
        <article className="mx-30 px-5 mb-20 min-w-2/3">
            <h2 className={"my-2 px-4 py-2 w-fit min-w-30 hover:bg-zinc-800 transition-all cursor-pointer rounded-xl text-2xl"}>{recipe.creator}</h2>
            <hr/>
            <h3 className={"text-2xl text-center my-4"}>{recipe.title}</h3>
            <div className={"flex flex-col gap-1 my-4"}>
                <span className={"text-xl"}>Ingredients:</span>
                <p>{recipe.ingredients}</p>
            </div>
            <div className={"flex flex-col gap-1 my-4"}>
                <span className={"text-xl"}>Instructions:</span>
                <p>{recipe.instructions}</p>
            </div>
            <p>Meal type: {recipe.meal_type}</p>
            <p>Category: {recipe.category}</p>
            <div className="flex justify-end gap-2 mt-2 mr-15">
                <p className={`${dietColorMap.get(recipe.diet)} p-2 rounded-2xl text-black font-bold select-none`}>{recipe.diet}</p>
                <p className={`${cuisineColorMap.get(recipe.cuisine)} p-2 rounded-2xl text-black font-bold select-none`}>{recipe.cuisine}</p>
            </div>
            <button className={"cursor-pointer"} onClick={handleLike} disabled={loading}>{likeIcon}</button>
            <span className={"ml-2"}>{likes.length} Likes</span>
        </article>
    );
}

export default Post;