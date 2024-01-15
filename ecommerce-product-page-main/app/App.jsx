'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';

const App = () => {

    const [cartQuantity, setCartQuantity] = useState(0);
    const [showCart, setShowCart] = useState(false);

    const addToCart = (quantity) => {
        setCartQuantity(cartQuantity + quantity);
        setShowCart(true);
    }

    return (
        <div className="w-full pb-8 font-kumbh-sans flex flex-col items-center max-w-[1105px] m-auto">
            <Header cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} showCart={showCart} setShowCart={setShowCart}/>
            <Product addToCart={addToCart}/>
        </div>
    );
};

export default App;
