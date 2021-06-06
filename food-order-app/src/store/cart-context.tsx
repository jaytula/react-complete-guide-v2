import { createContext } from "react";

export interface ICartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

const CartContext = createContext<{
  items: ICartItem[];
  totalAmount: number;
  addItem: (cartItem: ICartItem) => void;
  removeItem: (id: string) => void;
}>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
