import React from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {NavLink} from "react-router";

function Suggestions({users}) {
    const userList = users.map((user) => <NavLink to={`profile/${user.id}`} key={user.id} className={"flex gap-2 p-2 mt-2 w-fit min-w-30 hover:bg-zinc-800 transition-all cursor-pointer rounded-xl"}><AccountCircleIcon key={user.id}/> <span>{user.username}</span></NavLink>)
    return (
        <div className={"w-1/4 mt-20"}>
            <h2 className={"text-blue-400 font-semibold mb-3 text-xl"}>Suggestions for you</h2>
            {userList}
        </div>
    );
}

export default Suggestions;