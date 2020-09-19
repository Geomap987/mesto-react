import React from 'react';


function Card({title, link, likesNumber, onCardClick, item}) {
    function handleClick() {
        onCardClick(item);
      } 

    return (
            <article className="photo-grid__card">
                <img className="photo-grid__photo" src={link} alt={title} onClick={handleClick}/>
                <button className="photo-grid__delete-icon"></button>
                <div className="photo-grid__text">
                    <h3 className="photo-grid__title">{title}</h3>
                    <div className="photo-grid__like-wrapper">
                        <button type="button" className="photo-grid__like-icon" />
                        <h4 className="photo-grid__like-counter">{likesNumber}</h4>
                    </div>
                </div>
            </article>
    );
}

export default Card;