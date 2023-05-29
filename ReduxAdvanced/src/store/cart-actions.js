import { uiActions } from "./ui-slice";

import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://reactredux-a607f-default-rtdb.firebaseio.com/cart.json'
      );
      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          //items = [], when cartData.items is undefined
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};

const sendCartData = (cart) => {
    //given dispatch a function, dispatch will executes the function for you
    return (
        async (dispatch) => {
            dispatch(
                uiActions.showNotification({
                    status: 'pending',
                    title: 'Sending...',
                    message: 'Sending cart data'
                })
            );
            const sendRequest = async () => {
                const response = await fetch('https://reactredux-a607f-default-rtdb.firebaseio.com/cart.json',
                { method: 'PUT', body: JSON.stringify(cart) });
                if (!response.ok) {
                    throw new Error('Sending cart data failed');
                }
            };
            try {
                await sendRequest();
                dispatch(
                    uiActions.showNotification({
                      status: 'success',
                      title: 'Success',
                      message: 'Finish sending successfully'
                    })
                );
            } catch (error) {
                dispatch(
                    uiActions.showNotification({
                      status: 'error',
                      title: 'Error!',
                      message: 'Sending cart data failed!',
                    })
                );
            }
        }
    );
};

export default sendCartData;