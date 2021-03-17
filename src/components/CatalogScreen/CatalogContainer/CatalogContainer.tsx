import React, { useState } from "react";
import GoodItem from "./GoodItem/GoodItem";
import GroupItem from "./GroupItem/GroupItem";

export default function CatalogContainer() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="catalog-container">
      <div className="catalog">
        <h2>каталог продуктції</h2>
        <div className="group-section-container">
          <div className="groups-container">
            <GroupItem imgPath="./img/vecetables.jpg" title="все" />
            <GroupItem imgPath="./img/vecetables.jpg" title="овочі" />
            <GroupItem imgPath="./img/fruits.jpg" title="фрукти" />
            <GroupItem imgPath="./img/milk.jpg" title="молочне та яйця" />
          </div>
          <button className="group-move-next-btn">
            <img src="./img/arrow-icon.svg" alt="" />
          </button>
        </div>
        <div className="pagination">
          <button className="catalog-items-filter-btn">
            <img src="/img/filter-icon.svg" alt="" />
          </button>
          <div>
            <button className="pagination-base pagination-base-selected">
              1
            </button>
            <button className="pagination-base">2</button>
            <button className="pagination-base">3</button>
            <span className="pagination-spliter">....</span>
            <button className="pagination-base">7</button>
            <button className="pagination-base">8</button>
            <button className="pagination-base">9</button>
          </div>
        </div>
        <div className="items-container">
          <GoodItem
            imgPath="./img/vecetables.jpg"
            price={122.2}
            title={"Помідор рожевий Умань 800-100г"}
          />
          <GoodItem
            imgPath="./img/fruits.jpg"
            price={71.09}
            title={"Мандарин Іспанія 0.49-0.6 кг"}
          />
          <GoodItem
            imgPath="./img/milk.jpg"
            price={35}
            title={"Яйця курячі Ясенсвіт справжні гіганти 10шт."}
          />
          <GoodItem
            imgPath="./img/vecetables.jpg"
            price={122.2}
            title={"Помідор рожевий Умань 800-100г"}
          />
          <GoodItem
            imgPath="./img/fruits.jpg"
            price={71.09}
            title={"Мандарин Іспанія 0.49-0.6 кг"}
          />
          <GoodItem
            imgPath="./img/milk.jpg"
            price={35}
            title={"Яйця курячі Ясенсвіт справжні гіганти 10шт."}
          />
          <GoodItem
            imgPath="./img/vecetables.jpg"
            price={122.2}
            title={"Помідор рожевий Умань 800-100г"}
          />
          <GoodItem
            imgPath="./img/fruits.jpg"
            price={71.09}
            title={"Мандарин Іспанія 0.49-0.6 кг"}
          />
          <GoodItem
            imgPath="./img/milk.jpg"
            price={35}
            title={"Яйця курячі Ясенсвіт справжні гіганти 10шт."}
          />
        </div>
      </div>
      <div className="order-container">
        <p>Замовлення</p>
        <div className="order-list">
          <img src="./img/fruits.jpg" alt="" />
          <div>
            <p>Апельсин Іспанія</p>
            <p>71.09 грн.</p>
            <div>
              <button
                onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}>−</button>
              <p>{counter}</p>
              <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
          </div>
        </div>
        <div className="order-sum">
          <p>Всього: 670,50 грн</p>
          <button>Оформити замовлення</button>
        </div>
      </div>
    </div>
  );
}
