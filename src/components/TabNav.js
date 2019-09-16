import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';


// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/


export default function TabNav() {
    // return (
    // <div>
    //    <Nav tabs>
    //       <NavItem>
    //         <NavLink to='/'>Home</NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink to="/characters">Characters</NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink to="/locations">Locations</NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink to="/episodes">Episodes</NavLink>
    //       </NavItem>
    //     </Nav> 
    // </div>
    // )

    return (
        <Menu pointing secondary>
            <NavLink to="/">
                <Menu.Item icon="home" name='home' />
            </NavLink>

            <NavLink to="/characters">
                <Menu.Item icon="users" name='characters' />
            </NavLink>

            <NavLink to="/locations">
                <Menu.Item icon="location arrow" name='locations' />
            </NavLink>

            <NavLink to="/episodes">
                <Menu.Item icon="film" name='episodes' />
            </NavLink>
        </Menu>
    )

};
