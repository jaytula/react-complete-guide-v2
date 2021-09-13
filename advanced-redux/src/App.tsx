import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { FIREBASE_BACKEND } from "./globals";
import { RootState } from "./store";
import { Item } from "./store/cart-slice";

function App() {
  const showCart = useSelector<RootState, boolean>(state => state.ui.showCart);
  const cart = useSelector<RootState, { items: Item[]; totalQuantity: number }>(
    state => state.cart
  );

  useEffect(() => {
    fetch(`${FIREBASE_BACKEND}cart.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
