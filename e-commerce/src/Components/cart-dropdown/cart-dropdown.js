// import React from 'react';
// import { connect } from 'react-redux';
// import CustomButton from '../Custom-button/CustomButton';

// import CartItem from '../cart-items/cart-item';
// import { selectCartItems } from '../redux/cart/cart.selectors';

// import './cart-dropdown.styles.scss';

// const CartDropdown = ({ cartItems }) => (
//   <div className='cart-dropdown'>
//     <div className='cart-items'>
//       {cartItems.map(cartItem => (
//         <CartItem key={cartItem.id} item={cartItem} />
//       ))}
//     </div>
//     <CustomButton>GO TO CHECKOUT</CustomButton>
//   </div>
// );

// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });

// export default connect(mapStateToProps)(CartDropdown);

import React from 'react';

import CartItem from '../cart-items/cart-item';
import { connect } from 'react-redux';

import CustomButton from '../Custom-button/CustomButton';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem =><CartItem key={cartItem.id} item={CartItem}/>)
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapDispatchToProps = ({ cart: { cartItems } }) =>({
  cartItems
});

export default connect(mapDispatchToProps)(CartDropdown);
