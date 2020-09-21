import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({title: '', link: ''});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard({title: '', link: ''})
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        mainCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name={`profile`} title={`Редактировать профиль`}>
        <input type="text" id="profilename" name="name" placeholder="Имя" className="popup__input popup__input_title" pattern="[a-zA-ZА-ЯЁа-яё\s\-]+" minLength="2" maxLength="40" required />
        <span className="popup__input-error" id="profilename-error"></span>
        <input type="text" id="profilejob" name="about" placeholder="Занятие" className="popup__input popup__input_subtitle" minLength="2" maxLength="200" required />
        <span className='popup__input-error' id="profilejob-error"></span>
        <button type="submit" className="popup__submit-button popup-profile__submit-button">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name={`avatar`} title={`Обновить аватар`}>
        <input type="url" id="avatarlink" name="avatar" placeholder="Ссылка на аватар" className="popup__input popup__input_avatar" required />
        <span className='popup__input-error' id="avatarlink-error"></span>
        <button type="submit" className="popup__submit-button popup-avatar__submit-button">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name={`addphoto`} title={`Новое место`}>
        <input type="text" id="photoplace" name="name" placeholder="Название" className="popup__input popup__input_title" pattern="[a-zA-ZА-ЯЁа-яё\s\d\-]+" minLength="2" maxLength="40" required />
        <span className='popup__input-error' id="photoplace-error"></span>
        <input type="url" id="photolink" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_subtitle" required />
        <span className='popup__input-error' id="photolink-error"></span>
        <button type="submit" id="submit-button" className="popup__submit-button popup-addphoto__submit-button">Создать</button>
      </PopupWithForm>
      <PopupWithForm name={`confirm`} title={`Вы уверены?`}>
        <button onClose={handleAddPlaceClick} type="submit" className="popup__submit-button">Да</button>
      </PopupWithForm>
      <PopupWithImage onClose={closeAllPopups} isOpen={selectedCard.link} image={selectedCard.link} title={selectedCard.title} />

    </div>
  );
}

export default App;
