import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

// TODO: Add missing menu/tabs/nav below

export default function TabNav() {

    return (
        
        <Menu pointing secondary className="navigation">
            <NavLink to="/" activeClassName="selected" exact >
                <Menu.Item icon="home" name='home' />
            </NavLink>

            <NavLink to="/characters"  activeClassName="selected" exact>
                <Menu.Item icon="users" name='characters' />
            </NavLink>

            <NavLink to="/locations"  activeClassName="selected" exact>
                <Menu.Item icon="location arrow" name='locations' />
            </NavLink>

            <NavLink to="/episodes"  activeClassName="selected" exact>
                <Menu.Item icon="film" name='episodes' />
            </NavLink>
            <SearchBar />
        </Menu>
       
        
        
    )

};
