import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <p>home</p>
      </div>
      <ul className="ul-clear nav-menu">
        <li>
          <a href="/#">продукти</a>
        </li>
        <li>
          <a href="/#">майстер-класи</a>
        </li>
        <li>
          <a href="/#">приладдя</a>
        </li>
      </ul>
      <ul className="ul-clear right-menu">
        <li>
          <img src="/img/search.svg" alt="" />
        </li>
        <li>
          <img src="/img/language.svg" alt="" />
        </li>
        <li>
          <img src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
};
