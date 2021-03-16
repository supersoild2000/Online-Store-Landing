import React from "react";
import { Header } from "./Header/Header";

export default function HomeScreen() {
  return (
    <section className="home-screen">
      <Header />
      <div className="split-container">
        <div className='home-screen-text-block'>
          <h1>Проводь дозвілля з сімєю якісно!</h1>
          1000 та 1 заняття для усієї сім’ї водин клік. Обирай захоплюючі
          мастер-класи, улюбленні страви та насолоджуйся часом у колі рідних. Ми
          - ваш найкращій та найшвидший помічник у виборі занять для дозвілля.
        </div>
        <div className="title-family">
          <img src="./img/title-family.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
