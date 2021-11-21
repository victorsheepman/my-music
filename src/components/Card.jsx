import React from 'react'

export const Card = (props) => {
    const {img, name,artist}=props;
    return (
        <div className={`card`}>
            <figure className="card__image">
                <img src={img} alt="" />
            </figure>
            <h4 className="headline">{name}</h4>
            <span className="sub-headline">{artist} </span>
        </div>
    )
}
