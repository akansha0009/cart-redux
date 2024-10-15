import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { addItem, removeItem } from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch()

  const handleAddItem = () => {
    dispatch(addItem({
      id,
      title,
      price
    }))
  }
  const handleRemoveItem = () => {
    dispatch(removeItem(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}
          <span className={classes.itemprice}>${price}</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={handleAddItem} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
