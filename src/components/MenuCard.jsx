import React, { useContext } from "react";
import { MenuContext } from "../MenuContext";
import Counter from "./Counter";
import menuItems from "../data";

const Menu= () => {
  const { addItem, removeItem,  } = useContext(MenuContext);

  return (
    <div className="menuCard">
      {menuItems?.map((item) => (
        <div key={item.id} className="card">
          <h1>{item.heading}</h1>
          <ul className="menuList">
            {item?.names.map((name, index) => (
              <li key={index}>
                <div className="singleItem">
                  <div className="name">{name}</div>
                  <div className="price">{item.prices[index]}</div>
                  <Counter
                    item={item}
                    onAdd={() => addItem(item, index)}
                    onRemove={() => removeItem(item, index)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
