import React, {useContext, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router";
import {AuthContext} from "../App.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
import Suggestions from "../components/Suggestions.jsx";
import Search from "../components/Search.jsx";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function SearchPage() {
    const [users,setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const navigate = useNavigate();
    const {token} = useContext(AuthContext);

    useEffect(() => {
        const fetchUsers = async () => {
            if (!token) {
                alert("You have logged out");
                navigate("/login");
                return;
            }
            const response = await fetch("http://localhost:3000/api/users", {
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
            setUsers([...data]);
        }
        fetchUsers();
    }, []);
    console.log(filteredUsers);
    return (
        <main className="h-full max-h-screen min-h-screen flex flex-row bg-black text-white font-sans scroll:">
            <SideBar/>
            <section className="w-4/5 flex mt-5">
                <div className={"w-4/5 flex flex-col gap-5 place-items-center "}>
                    <Search users={users} setFilteredUsers={setFilteredUsers}/>
                    <div className={"max-h-4/5 overflow-y-scroll snap-y snap-mandatory"}>
                        {filteredUsers.map((user) => <NavLink to={`../profile/${user.id}`} key={user.id} className={"flex gap-2 p-2 mt-2 w-fit min-w-90 hover:bg-zinc-800 transition-all cursor-pointer rounded-xl snap-center"}><AccountCircleIcon key={user.id}/> <span>{user.username}</span></NavLink>)}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default SearchPage;