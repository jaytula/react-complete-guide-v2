import { AppDispatch } from ".";
import { FIREBASE_BACKEND } from "../globals";
import { cartActions, ICart } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const sendCartData = (cart: ICart) => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(`${FIREBASE_BACKEND}cart.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${FIREBASE_BACKEND}cart.json`);

      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData() as ICart;
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity || 0,
        changed: false
      }))
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
