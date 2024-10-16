import { useState } from "react";
import BasketCounter from "../Components/BasketCounter/BasketCounter";
import CreateMenu from "../Components/CreateMenu/CreateMenu";
import data from "../data/data.json";
import styleApp from "./App.module.scss";

function App() {
  return (
    <div className={styleApp.container}>
      <div className={styleApp.card}>
        <div className={styleApp.eatMenu}>
          <CreateMenu item={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
