import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import {toggle} from '../../store/ui-slice'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)
  console.log('qan', cartQuantity)

  const handleToggle = () => {
    dispatch(toggle())
  }

  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
