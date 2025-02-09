import React from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Suggestions(props) {
    const users = props.users.map((user,index) => <div key={index} className={"flex gap-2 mt-2"}><AccountCircleIcon key={index}/> <p>{user}</p></div>)
    return (
        <div className={"w-1/4 mt-20"}>
            <h2 className={"text-slate-500 font-bold text-xl"}>Suggestions for you</h2>
            {users}
        </div>
    );
}

export default Suggestions;