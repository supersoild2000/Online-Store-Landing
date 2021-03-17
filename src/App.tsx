import React from "react";
import { CatalogScreen } from "./components/CatalogScreen/CatalogScreen";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import SecondScreen from "./components/SecondScreen/SecondScreen";

function App() {
  return (
    <div className="app">
      <HomeScreen />
      <SecondScreen />
      <CatalogScreen />
      <SecondScreen />
      <SecondScreen />
    </div>
  );
}

export default App;
