import React from "react";
import Menu from "./components/MenuCard";
import { MenuProvider } from "./MenuContext";
import Cart from "./components/Cart";
import "./index.css"
const App = () => {
  return (
    <MenuProvider>
      <div className="mainContainer" style={{margin:'2rem' }}>
      <Menu />
      <Cart/>
    </div>
    </MenuProvider>
  );
};

export default App;
