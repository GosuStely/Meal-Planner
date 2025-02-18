import SideBar from "../components/SideBar/SideBar.jsx";
import Timeline from "../components/Timeline.jsx";
import Suggestions from "../components/Suggestions.jsx";
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {AuthContext} from "../App.jsx";
import {prodURL} from "../utils/urls.js";
function HomePage() {
    const [users,setUsers] = useState([]);
    const navigate = useNavigate();
    const {token} = useContext(AuthContext);
    useEffect(() => {
        const fetchUsers = async () => {
            if (!token) {
                alert("You have logged out");
                navigate("/login");
                return;
            }
                const response = await fetch(`${prodURL}/api/users?limit=true`, {
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
                setUsers(data);
            }
        fetchUsers();
    }, []);

    return (
        <main className="h-full min-h-screen flex flex-row bg-black text-white font-sans">
            <SideBar/>
            <section className="w-4/5 flex mt-5">
                <Timeline/>
                <Suggestions users={users} />
            </section>
        </main>
    );
}

export default HomePage;