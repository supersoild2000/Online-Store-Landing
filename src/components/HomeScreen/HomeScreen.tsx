import React from "react";
import { Header } from "./Header/Header";

export default function HomeScreen() {
  return (
    <section className="home-screen">
      <Header />
      <div className="split-container">
        <div className='home-screen-text-block'>
          <h1>Проводь дозвілля з сім'єю якісно!</h1>
          1000 та 1 заняття для усієї сім’ї в один клік. Обирай захоплюючі
          майстер-класи, улюбленні страви та насолоджуйся часом у колі рідних. Ми
          - ваш найкращий та найшвидший помічник у виборі занять для дозвілля.
        </div>
        <div className="title-family">
          <img src="./img/title-family.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
