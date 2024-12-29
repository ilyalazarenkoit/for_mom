import elya from "../../photos/Elya.jpg";
import stiven from "../../photos/стивен.jpg";
import me from "../../photos/я.jpg";
import popka from "../../photos/попка стивена.jpg";

import "./Rebus.css";
function Rebus() {
  return (
    <div className="rebusWrapper">
      <h1>ОТГАДАЙ РЕБУС</h1>
      <h3>Подсказки: </h3>
      <h3>1. Это мой вопрос к тебе.</h3>
      <h3>2. Количество звездочек, это количество букв.</h3>

      <div className="rebusContainer">
        <div className="rebusItem">
          <img className="rebusPhoto" src={elya} alt="" />
          <h2> ☝🏻</h2>
          <h2>**</h2>
        </div>
        <div className="rebusItem">
          <img className="rebusPhoto" src={stiven} alt="" />
          <h2>Мы просим **** лапку </h2>
          <h2>у Стивена 🐾 </h2>
        </div>
        <div className="rebusItem">
          <img className="rebusPhoto" src={me} alt="" />
          <h2>Кому?😏 </h2>
          <h2>***</h2>
        </div>
        <div className="rebusItem">
          <img className="rebusPhoto" src={popka} alt="" />

          <h2>В свою *****</h2>
          <h2>🍑</h2>
        </div>
        <div className="rebusItem">
          <h1>?</h1>
        </div>
      </div>
    </div>
  );
}

export default Rebus;
