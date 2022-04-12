import React from 'react'
import './Header.css'
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';


const Header = () => {
    return (
        <div className='header__container'>
            <h1 className='header__title'>Blockchain Simulator</h1>
            <a href="https://github.com/pac469?tab=overview&from=2021-03-01&to=2021-03-31" target="_blank">
                <IconButton ><GitHubIcon className="header__icon" fontSize="medium" /></IconButton>
            </a>

        </div>
    )
}

export default Header