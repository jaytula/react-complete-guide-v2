import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { RootState } from "./store";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import { ICart } from "./store/cart-slice";
import { INotification } from "./store/ui-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector<RootState, boolean>(
    (state) => state.ui.showCart
  );
  const cart = useSelector<RootState, ICart>(
    (state) => state.cart
  );
  const notification = useSelector<RootState, null | INotification>(
    (state) => state.ui.notification
  );
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }

    if(cart.changed) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          title={notification?.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
