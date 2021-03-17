import React from "react";

interface IProps {
  imgPath: string;
  title: string;
  price: number;
}

const GoodItem: React.FC<IProps> = ({ imgPath, title, price }) => {
  return (
    <div className="good-item">
      <img src={imgPath} alt="" />
      <p>{title}</p>
      <div>
        <p>{price} грн.</p>
        <button>Обрати</button>
      </div>
    </div>
  );
};

export default GoodItem;
