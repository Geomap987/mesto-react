import React, { useEffect } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardContext } from '../contexts/CardContext';


function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ title: '', link: '' });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getUserInfo().then(
      (res) => {
        const info = res;
        setCurrentUser(info)
      }).catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    api.getCardList().then(
      (res) => {
        const items = res
        setCards(items)
      }).catch((err) => console.log(err));
  }, [])


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.likeCard(card._id, isLiked).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newCard) => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    });
  }

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
    setSelectedCard({ title: '', link: '' })
  }

  function handleUpdateUser(a) {
    api.editUserInfo(a).then(
      (res) => {
        const info = res;
        setCurrentUser(info)
      }).catch((err) => console.log(err));
    closeAllPopups()
  }

  function handleUpdateAvatar(a) {
    api.editUserAvatar(a).then(
      (res) => {
        const info = res;
        setCurrentUser(info)
      }).catch((err) => console.log(err));
    closeAllPopups()
  }

  function handleAddPlaceSubmit(a) {
    api.createCard(a).then(
      (newCard) => {
        setCards([...cards, newCard]);
      }).catch((err) => console.log(err));
    closeAllPopups()
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardContext.Provider value={cards}>

        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            openAddPlace={handleAddPlaceClick}
            mainCardClick={handleCardClick}
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
            cards={cards}
          />
          <Footer />

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <AddPlacePopup onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} onAddPlace={handleAddPlaceSubmit} />
          <PopupWithForm name={`confirm`} title={`Вы уверены?`}>
            <button onClose={handleAddPlaceClick} type="submit" className="popup__submit-button">Да</button>
          </PopupWithForm>
          <PopupWithImage onClose={closeAllPopups} isOpen={selectedCard.link} image={selectedCard.link} title={selectedCard.title} />

        </div>
      </CardContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
