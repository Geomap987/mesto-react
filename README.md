# Проект 11: Место

## <https://geomap987.github.io/mesto-react>

### Основные задачи, реализованные в данном проекте
* Реализация проекта на React;
* Подключение проекта к серверу;
* Загрузка информации о пользователе с сервера;
* Загрузка карточек с сервера;
* Возможность редактирования профиля, включая изменение аватара;
* Отображение количества лайков;
* Реализация удаления карточки, загруженной юзером.


**Описание**

Проект написан на React. Реализовано подключение проекта к серверу, получение и отправка данных с помощью API, реализована дополнительная функциональность: удаление только своих карточек, попап подтверждения удаления, изменение аватара, отоброжение количества лайков каждой карточки 

**Основные технологии**

* Проект реализован с использованием функциональных компонентов React, хуков useState, useEffect, useContext, useRef;
* Для получения эффекта адаптивности были использованы медиазапросы, а также свойства flex-box и grid;
* Галерея реализована с помощью Grid;
* Для реализации окна Popup на JS было использовано добавление и удаление модификатора popup_opened при нажатии на кнопки редактирования и закрытия формы;
* С помощью React было задано поведение формы при действии submit, когда введенные значения автоматически отображаются в профиле, добавляются фотографии;
* Начальные карточки добавляются из объекта при помощи метода prepend, пользовательские карточки добавляются методом push.
* С помощью API были реализованы запросы на сервер и отображение элементов страницы на основе данных, полученных с сервера. 
