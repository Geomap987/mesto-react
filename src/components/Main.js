import React, { useEffect } from 'react';

import { api } from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        api.getUserInfo().then(
            (res) => { 
                const info = res; 
                
                setUserName(info.name);
                setUserDescription(info.about);
                setUserAvatar(info.avatar)
            })
    }, [])

    useEffect(() => {
        api.getCardList().then(
            (res) => { 
                const items = res.map(item => ({
                    title: item.name,
                    link: item.link,
                    likesNumber: item.likes.length
                }))
                setCards(items)
                
            })
            
    }, [])

    

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__wrapper">
                    <div className="profile__photo-wrapper">
                        <img className="profile__photo" src={userAvatar} alt="Фотография профиля" />
                        <div onClick={props.onEditAvatar} className="profile__edit-pen"></div>
                    </div>
                    <div className="profile__text-container">
                        <div className="profile__button-wrapper">
                            <h1 className="profile__title">{userName}</h1>
                            <button onClick={props.onEditProfile} type="button" className="profile__edit-button" ></button>
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
            </section>
            <section className="photo-grid">
                <div className="photo-grid__container">
                    {cards.map(card => <Card title={card.title} link={card.link} likesNumber={card.likesNumber} onCardClick={props.mainCardClick} item={card}/>)}
                </div>
            </section>
        </main>
    );
}

export default Main;