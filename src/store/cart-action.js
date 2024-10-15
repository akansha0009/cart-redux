import { showNotification } from "./ui-slice"
import { replaceCart } from "./cart-slice"

export const fetechCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://redux-project-7f0c5-default-rtdb.firebaseio.com/cart.json');           
            if(!response.ok){
                throw new Error('Failed to fetch Data!')
            }
            const data = await response.json();
            return data
        }

        try{
           const cartData = await fetchData()
           console.log(cartData, 'data')
           dispatch(replaceCart({items: cartData.items || [], totalQuantity: cartData.totalQuantity}))
        } catch {
            dispatch(showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Failed to fetch Data!'
              }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending Cart Data!'
          }))

          const sendRequest = async () => {
            const response = await fetch('https://redux-project-7f0c5-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity})
              })
              if(!response.ok){
                new Error('Failed to send data!')
              }
          }

          try{
            await sendRequest()
            dispatch(showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Sent cart data successfully!'
              }))
          } catch {
            dispatch(showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Sent cart data failed!'
              }))
          }
    }
}