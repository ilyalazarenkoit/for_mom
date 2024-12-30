import "./App.css";
import Photos from "./files/Photos";
import React, { useState, useRef } from "react";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.muted = false;
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleButtonClick = () => {
    // Останавливаем музыку перед открытием видео
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    // Открываем видео в новой вкладке
    window.open("https://youtu.be/EKf4795q3mM", "_blank");
  };

  return (
    <div className="App">
      <audio ref={audioRef} loop muted>
        <source
          src="https://res.cloudinary.com/dgt4yqucb/video/upload/v1735597327/Dee_Yan-Key_-_Happy_Birthday_to_You_Classical_dekkcz.mp3"
          type="audio/mpeg"
        />
        Ваш браузер не поддерживает воспроизведение аудио.
      </audio>

      <div className="hero">
        <h1>HAPPY BIRTHDAY</h1>
        <h1> DEAR MOM!!!🤍</h1>
      </div>

      <div className="message">
        <div>Кликни на кнопочку ниже👇🏻, пожалуйста💝</div>
        <button className="play-music" onClick={handlePlayPause}>
          <h1>🥳🥳🥳🎈🎈🎈</h1>
        </button>
      </div>

      <Photos />
      <div className="wrapper-footer">
        <h1>НО ЭТО ЕЩЕ НЕ ВСЕ😉</h1>
        <button className="youtube-button" onClick={handleButtonClick}>
          <h1>🎥 Вторая часть 🎶</h1>
        </button>
      </div>
      <div style={{ width: "1000px", margin: "auto" }}></div>
    </div>
  );
}

export default App;
