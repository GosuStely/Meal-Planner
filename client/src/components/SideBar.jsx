import React from 'react';
import {NavLink} from "react-router";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

function SideBar(props) {
    return (
        <div className="flex flex-col text-white mt-16">
            <NavLink to={"/"} className={"bg-black w-28 py-3 px-5 rounded-full m-1 hover:bg-zinc-800 transition-all"}>
                <HomeIcon/>
                <span>Home</span>
            </NavLink>
            <NavLink to={"/"} className={"bg-black w-28 py-3 px-5 rounded-full m-1 hover:bg-zinc-800 transition-all"}>
                <SearchIcon/>
                <span>Search</span>
            </NavLink>
            <NavLink to={"/"} className={"bg-black w-28 py-3 px-5 rounded-full m-1 hover:bg-zinc-800 transition-all"}>Home</NavLink>
            <NavLink to={"/"} className={"bg-black w-28 py-3 px-5 rounded-full m-1 hover:bg-zinc-800 transition-all"}>Home</NavLink>
            <NavLink to={"/"} className={"bg-black w-28 py-3 px-5 rounded-full m-1 hover:bg-zinc-800 transition-all"}>Home</NavLink>
        </div>
    );
}

export default SideBar;