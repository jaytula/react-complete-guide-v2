import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Item } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const items = useSelector<RootState, Item[]>(state => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(item => <CartItem key={item.id}
          item={{ id: item.id, title: item.title, quantity: item.quantity, total: item.total, price: item.price }}
        />)}
      </ul>
    </Card>
  );
};

export default Cart;
