import React from 'react';
import {NavLink} from "react-router";

function SideBarLink({to,label,icon}) {
    return (
        <NavLink to={to} className={"bg-black w-2/3 py-3 ml-5 pl-5 rounded-full m-1 hover:bg-zinc-800 transition-all text-lg"}>
            {icon}
            <span className={"ml-3"}>{label}</span>
        </NavLink>
    );
}

export default SideBarLink;