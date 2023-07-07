import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addItem = (item, index) => {
      const existingItem = cartItems.find(
        (cartItem) => cartItem.id === item.id && cartItem.price === item.prices[index]
      );
  
      if (existingItem) {
        const updatedCartItems = cartItems.map((cartItem) => {
          if (cartItem.id === item.id && cartItem.price === item.prices[index]) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        });
  
        setCartItems(updatedCartItems);
      } else {
        const newItem = {
          id: item.id,
          name: item.names[index],
          price: item.prices[index],
          quantity: 1,
        };
  
        setCartItems((prevItems) => [...prevItems, newItem]);
      }
    };
  
    const removeItem = (item, index) => {
      const existingItem = cartItems.find(
        (cartItem) => cartItem.id === item.id && cartItem.price === item.prices[index]
      );
  
      if (existingItem) {
        if (existingItem.quantity > 1) {
          const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id && cartItem.price === item.prices[index]) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              };
            }
            return cartItem;
          });
  
          setCartItems(updatedCartItems);
        } else {
          const updatedItems = cartItems.filter(
            (cartItem) => cartItem.id !== item.id || cartItem.price !== item.prices[index]
          );
          setCartItems(updatedItems);
        }
      }
    };
  
    const clearCart = () => {
      setCartItems([]);
    };
  
    const menuItems = {
      1: {
        id: 1,
        heading: "Burgers",
        names: [
          "Cheesy Veg Burger",
          "Paneer Burger",
          "Double Patty Burger",
          "Classic Aloo Tikki Burger",
          "Multi Grain Burger",
        ],
        prices: ["69", "69", "59", "39", "49"],
      },
      2: {
        id: 2,
        heading: "Garlic Lofe",
        names: ["Cheesy Garlic Lofe", "Veggie Garlic Lofe", "Paneer Garlic Lofe"],
        prices: ["79", "89", "99"],
      },
      // Rest of the menu items...
    };
  
    return (
      <MenuContext.Provider
        value={{ menuItems, cartItems, addItem, removeItem, clearCart }}
      >
        {children}
      </MenuContext.Provider>
    );
  };
  