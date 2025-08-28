import { useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id = {}),
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingCartItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (existingCartItem > -1) {
      const existingItem = state.items[existingCartItem];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItem] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return {...state, items: updatedItems}
  }

  if (action.type === "REMOVE_ITEM") {
  }

  return state;
};

export const CartContextProvider = ({ children }) => {
  useReducer(cartReducer, { items: [] });
  return <CartContext>{children}</CartContext>;
};

export default CartContext;
