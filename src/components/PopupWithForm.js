import React from 'react';

const PopupWithForm = ({ title, name, isOpen, onClose, children }) => (

    <section className={isOpen ? `popup popup-${name} popup_opened` : `popup popup-${name}`}>
        <form id={`${name}form`} name={`${name}form`} className={`popup__container popup__container_${name}`} novalidate>
            <button type="button" onClick ={onClose} id={`${name}button`} className="popup__close-button"></button>
            <h3 className="popup__title">{title}</h3>
            {children}
        </form>
    </section >
    )


export default PopupWithForm;