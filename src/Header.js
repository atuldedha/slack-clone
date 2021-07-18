import React from 'react'
import './Header.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {Avatar} from '@material-ui/core'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import {useStateValue} from './StateProvider'

const Header = () => {

    const [{user}] = useStateValue();

    return (
        <div className = "header">

            <div className = "header_left">

                <Avatar
                    className = 'header_avatar'
                    alt = {user?.displayName}
                    src = {user?.photoUrl}/>

                <AccessTimeIcon />

            {/** Avatar for loggin users */}
            {/**Time icon */}

            </div>

            <div className = "header_search">

                <SearchIcon />
                <input placeholder = "Search anything" type = "text" />

            {/**Search icon */}
            {/** input */}

            </div>

            <div className = "header_right">

                <HelpOutlineIcon />
                {/**help icon */}
            </div>
        </div>
    )
}

export default Header
