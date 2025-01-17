import React, { useState } from "react";
import "./Photos.css";
import photo1 from "../../photos/photo1.jpg";
import photo2 from "../../photos/photo2.jpg";
import photo3 from "../../photos/photo3.jpg";
import photo15 from "../../photos/photo15.jpg";
import photo4 from "../../photos/photo4.jpg";
import photo6 from "../../photos/photo6.jpg";
import photo7 from "../../photos/photo7.jpg";
import photo8 from "../../photos/photo8.jpg";
// import photo9 from "../../photos/photo9.jpg";
import photo10 from "../../photos/photo10.jpg";
// import photo11 from "../../photos/photo11.jpg";
// import photo12 from "../../photos/photo12.jpg";
// import photo13 from "../../photos/photo13.jpg";
// import photo14 from "../../photos/photo14.jpg";
// import photo15 from "../../photos/photo15.jpg";
// import photo16 from "../../photos/photo16.jpg";

let photos = [
  {
    src: photo1,
    text: "Мамулечка, поздравляю тебя с твоим Днем! 🎂 <br/> Надеюсь тебе понравиться тот подарок который мы тебе приготовили🎁 <br/>P.S. Я не мог не поставить эту фотографию первой, потому как это одна из моих любимых твоих фотографий🥰 <br/>Она с нашего последнего совместного путешествия. Помнишь как было круто?😎",
  },
  {
    src: photo10,
    text: "Мамулечка, желаю тебе чтобы каждый миг был наполнен счастьем, <br/>радостью и теплотой!✨ <br/>Пусть каждый день тебе светит солнышко, дарит тебе вдохновение и нескончаемую волну позитивных эмоций, которые ты так заслуживаешь💛",
  },
  {
    src: photo4,
    text: "Пусть в твоей жизни всегда находится место не только для важных дел и серьезных решений👩🏼‍⚕️, но и для беззаботного веселья, искреннего смеха и милых глупостей!🤪",
  },
  {
    src: photo2,
    text: "Желаю тебе чувствовать себя свободной от условностей, наслаждаться каждым моментом и помнить, что в душе всегда можно оставаться немножко ребенком. Ведь счастье живет в умении радоваться мелочам!",
  },
  {
    src: photo6,
    text: "Желаю тебе как можно чаще отправляться в путь, исследовать новые горизонты и наполнять свою жизнь впечатлениями, которые остаются в сердце навсегда!☀️✈️",
  },
  {
    src: photo3,
    text: "Пусть твой изысканный стиль всегда подчёркивает твою уникальность и благородство, а каждая деталь твоего образа говорит о тонком вкусе и природной красоте!✨💫",
  },
  {
    src: photo15,
    text: "Будь всегда такой же нежной, красивой и женственной, какой ты есть сейчас!❤️",
  },

  {
    src: photo7,
    text: "А так же, будь всегда такой же активной и энергичной!🤸🏻‍♀️🚴🏻‍♀️🤾🏻‍♀️ <br/>ТЫ У МЕНЯ САМАЯ СПОРТИВНАЯ И ПОДТЯНУТАЯ МАМА НА ПЛАНЕТЕ!🏆 <br/>(Но не расслабляйся, я все еще хотел бы чтобы ты пошла на какой ни-будь активный спорт)",
  },
  {
    src: photo8,
    text: "И помни мамулечка, родные и близкие всегда рядом и всегда поддержат тебя🧡💐",
  },
  // { src: photo9, text: "Фото 9: Время с близкими 👵👴" },
  // { src: photo11, text: "Фото 11: Кулинарные шедевры 🍰" },
  // { src: photo12, text: "Фото 12: Забавные моменты 🐾" },
  // { src: photo13, text: "Фото 13: Творчество и искусство 🎨" },
  // { src: photo14, text: "Фото 14: Детские радости 🧸" },
  // { src: photo15, text: "Фото 15: Пейзажи 🌄" },
  // { src: photo16, text: "Фото 16: Вечерние прогулки 🌙" },
];

function Photos() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const totalPhotos = photos.length;

  const goToPreviousPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto - 1 + totalPhotos) % totalPhotos);
  };

  const goToNextPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % totalPhotos);
  };

  return (
    <div className="photo-container">
      <button onClick={goToPreviousPhoto} className="nav-button left">
        ◀
      </button>

      <div className="photo-wrapper">
        <img
          src={photos[currentPhoto].src}
          alt={`Фото ${currentPhoto + 1}`}
          className="photo"
        />
        <div
          className="photo-text"
          dangerouslySetInnerHTML={{ __html: photos[currentPhoto].text }}
        />
      </div>

      <button onClick={goToNextPhoto} className="nav-button right">
        ▶
      </button>
    </div>
  );
}

export default Photos;
