import React, { useState } from "react";
import styleMenu from "./CreateMenu.module.scss";

function CreateMenu(props) {
  const eat = props.item;

  console.log(eat[0].countN);
  let number = 0;
  eat.forEach((e) => {
    number = number + e.countN;
  });

  let summ = 0;
  eat.forEach((e) => {
    const { price, countN } = e;
    summ += price * countN;
    console.log(summ);
  });

  const [count, setCount] = useState(eat);
  function prevCount(i) {
    const newArr = [...count];
    if (newArr[i].countN === 0) {
      return;
    }
    newArr[i].countN -= 1;
    setCount(newArr);
  }

  function nextCount(i) {
    const newArr = [...count];
    newArr[i].countN += 1;
    setCount(newArr);
  }

  return (
    <div>
      <div className={styleMenu.basketBox}>
        <p className={styleMenu.basket}>Корзина</p>
        <p className={styleMenu.basketText}>{number}</p>
      </div>
      {eat.map((e, index) => {
        const { name, img, massa, price, countN } = e;

        return (
          <div className={styleMenu.containerBox} key={index}>
            <div className={styleMenu.imgBox}>
              <img src={img} alt={name} />
            </div>
            <div className={styleMenu.descrBox}>
              <p className={styleMenu.text}>{name}</p>
              <p className={styleMenu.text}>{massa}</p>
              <p className={styleMenu.text}>{price}₽</p>
            </div>
            <div className={styleMenu.countBox}>
              <button
                onClick={() => prevCount(index)}
                className={styleMenu.prevCount}
              >
                -
              </button>
              <p>{countN}</p>
              <button
                onClick={() => nextCount(index)}
                className={styleMenu.nextCount}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
      <div className={styleMenu.all}>
        <p>Итого</p>
        <p>{summ}₽</p>
      </div>
      <button className={styleMenu.btn}>Оформить заказ</button>
      <p className={styleMenu.delivery}>Бесплатная доставка</p>
    </div>
  );
}

export default CreateMenu;
