import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

export const Search = () => {
    const {setState}=useContext(AppContext);
    const handleChange = (e)=>{
        console.log(e.target.value);
        setState(e.target.value)
    }
    return (
        <div className='search'>
            <input type="text" placeholder='search' onChange={handleChange}/>
            <figure className='search__image'>
                <img src="assets/images/user.png" alt="" />
            </figure>
        </div>
    )
}
