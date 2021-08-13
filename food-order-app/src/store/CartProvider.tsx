import { ReactNode, useReducer } from "react";
import CartContext, { ICartItem } from "./cart-context";

interface ICartState {
  items: ICartItem[];
  totalAmount: number;
}

interface ICartActionAdd {
  type: "ADD";
  item: ICartItem;
}

interface ICartActionRemove {
  type: "REMOVE";
  id: string;
}

interface ICartActionClear {
  type: "CLEAR"
}

const defaultCartState: ICartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (
  state: ICartState,
  action: ICartActionAdd | ICartActionRemove | ICartActionClear
) => {
  let updatedItems: ICartItem[];

  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (existingIndex === -1) {
      updatedItems = state.items.concat(action.item as ICartItem);
    } else {
      updatedItems = [...state.items];
      updatedItems[existingIndex] = {
        ...updatedItems[existingIndex],
        amount: updatedItems[existingIndex].amount + action.item.amount,
      };
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    updatedItems = [...state.items];
    const updatedItem = { ...state.items[existingCartItemIndex] };
    updatedItem.amount -= 1;
    if (updatedItem.amount === 0) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    const updatedTotalAmount = state.totalAmount - updatedItem.price;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if(action.type === "CLEAR") {
    return defaultCartState;
  }

  return state;
};

export const CartProvider = (props: { children: ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (cartItem: ICartItem) => {
    // setItems((prev) => [...prev, cartItem]);
    dispatchCartAction({ type: "ADD", item: cartItem });
  };

  const removeItemFromCartHandler = (id: string) => {
    // setItems((prev) => prev.filter((item) => item.id !== id));
    dispatchCartAction({ type: "REMOVE", id: id });
    console.log('here');
  };

  const clearCartHandler = () => {
    dispatchCartAction({type: "CLEAR"})
  }

  const value = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
