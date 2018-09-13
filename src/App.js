import React from 'react';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';


const App = ()=>{
  return(
    <div>
      <CartHeader/>
      <CartItems/>
      <CartFooter copyright={2018}/>
    </div>
  )
}

export default App;
