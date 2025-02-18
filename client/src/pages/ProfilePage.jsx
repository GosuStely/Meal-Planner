import {useNavigate, useParams} from "react-router";
import SideBar from "../components/SideBar/SideBar.jsx";
import RadioButton from "../components/RadioButton.jsx";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../App.jsx";
import Post from "../components/Post.jsx";
import {prodURL} from "../utils/urls.js";


function ProfilePage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const {token} = useContext(AuthContext);
    const [username,setUsername] = useState();
    const [likedPosts,setLikedPosts] = useState([]);
    const [createdPosts,setCreatedPosts] = useState([]);
    const [currPosts, setCurrPosts] = useState([]);
    useEffect(() => {
        const fetchProfile = async() =>{
            if (!token) {
                alert("You have logged out");
                navigate("/login");
                return;
            }
            const response = await fetch(`${prodURL}/api/users/${id}`, {
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
            setLikedPosts(data.likedPosts)
            setCreatedPosts(data.createdPosts)
            setUsername(data.username)
            setCurrPosts(data.createdPosts.map(recipe => <Post key={recipe.id} recipe={recipe} id={recipe.id}/>));
        }

        console.log(currPosts,"sdsds");
        fetchProfile();

    },[id])
    const handleChange = (e) => {
        if (e.target.value === "liked"){
            setCurrPosts(likedPosts.map(recipe => <Post key={recipe.id} recipe={recipe} id={recipe.id}/>));
        } else{
            setCurrPosts(createdPosts.map(recipe => <Post key={recipe.id} recipe={recipe} id={recipe.id}/>));
        }
    }
    return (
        <main className={"bg-black text-white h-full min-h-screen flex flex-row"}>
            <SideBar/>
            <div className={"w-full flex flex-col gap-5 mt-15"}>
                <h1 className={"text-3xl"}>{username}</h1>
                <hr/>
                <div onChange={handleChange} className={"flex gap-5"}>
                    <RadioButton value={"created"} name={"option"} label={"Created"} checked={true}/>
                    <RadioButton value={"liked"} name={"option"} label={"Liked"}/>
                </div>
                <div className="flex flex-col gap-5">
                    {currPosts.length > 0 ? currPosts : <span>No posts</span>}
                </div>
            </div>
        </main>
    );
}

export default ProfilePage;