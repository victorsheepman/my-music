import React from 'react'
import { Search } from './Search'

export const Header = () => {
    return (
        <header className='header'>
            <h2  className='header__title' > <span>My</span> music</h2>
            <Search />
        </header>
    )
}
