import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
function Header(){
    const [{user}, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon/>
                <input 
                placeholder="Search for Artists, songs, others" 
                type="text" />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="PO"/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;