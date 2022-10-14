import React from "react";
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu"
import {IconButton} from "@material-ui/core"
import formimage from "../images/logo.png"
import SearchIcon from "@material-ui/icons/Search"
import AppsIcon from "@material-ui/icons/Apps"
import { Search } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar"
import avatarimage from "../images/avatar.png" 
import TemporaryDrawer from "./TemporaryDrawer";
function Header()
{
    return(
        <div className="header">
        <div className="header_info">
        <TemporaryDrawer/>
             
              <img src={formimage} style={{height:'40px',width:"40px"}}className="form_image" />
        <div className="info">
            Dynamic Forms
        </div>
        </div>
        <div className="header_search">
              <IconButton><SearchIcon/></IconButton>
              <input type="text" name="search"placeholder="Search"/> 
        </div>
        <div className="header_right">
                <IconButton> 

                <AppsIcon/>
                </IconButton>
                <IconButton>
                <Avatar src={avatarimage} alt="no img"/>
                </IconButton>

               
        </div>

        </div>
    
    )
}
export default Header;