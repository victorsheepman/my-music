import React from 'react'

export const Song = ({id, title, artist, time}) => {
    return (
        <div className='song'>
            <div className='song__left'>
               <span  className='song__id sub-headline'>{id}</span>
                <h3  className='song__title headline'>{title}</h3> 
            </div>
            <div className='song__right' >

                <h4  className='song__artist body'>{artist}</h4>
                <span  className='song__time sub-headline'>{time}</span>
            </div>
            
        </div>
    )
}
