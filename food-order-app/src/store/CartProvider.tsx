import { ReactNode, useState } from "react";
import CartContext, { ICartItem } from "./cart-context";

export const CartProvider = (props: { children: ReactNode }) => {
  const [items, setItems] = useState<ICartItem[]>([]);

  const addItem = (cartItem: ICartItem) => {
    setItems((prev) => [...prev, cartItem]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const value = {
    items,
    totalAmount: 0,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
