import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SideBarLink from "./SideBarLink.jsx";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';

function SideBar(props) {
    const iconSize = 30;
    return (
        <div className="flex flex-col w-1/5 h-0 sticky top-16">
            <SideBarLink to="/" label="Home" icon={<HomeIcon sx={{ fontSize: iconSize }}/>}></SideBarLink>
            <SideBarLink to="/search" label="Search" icon={<SearchIcon sx={{ fontSize: iconSize }}/>}></SideBarLink>
            <SideBarLink to="/create" label="Create" icon={<AddCircleOutlineIcon sx={{ fontSize: iconSize }}/>}></SideBarLink>
            <SideBarLink to="/profile" label="Profile" icon={<AccountCircleIcon sx={{ fontSize: iconSize }}/>}></SideBarLink>
            <SideBarLink to="/login" label="Log out" icon={<LogoutIcon sx={{ fontSize: iconSize }}/>}></SideBarLink>
        </div>
    );
}

export default SideBar;