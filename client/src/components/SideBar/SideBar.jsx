import React from 'react';
import {NavLink} from "react-router";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SideBarLink from "./SideBarLink.jsx";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function SideBar(props) {
    return (
        <div className="flex flex-col mt-16 w-1/5">
            <SideBarLink to="/" label="Home" icon={<HomeIcon/>}></SideBarLink>
            <SideBarLink to="/search" label="Search" icon={<SearchIcon/>}></SideBarLink>
            <SideBarLink to="/create" label="Create" icon={<AddCircleOutlineIcon/>}></SideBarLink>
            <SideBarLink to="/profile" label="Profile" icon={<AccountCircleIcon/>}></SideBarLink>
        </div>
    );
}

export default SideBar;