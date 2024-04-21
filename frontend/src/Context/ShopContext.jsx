import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null)

const getDefaultCart = ()=>{
    let cart= {};
    for (let index=0; index < 300+1; index++){
        cart[index] = 0;
    }
    return cart;
} 

const ShopContextProvider = (props)=>{

    const [all_product, setAll_Products] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Products(data))
    },[])

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                } else {
                    console.error(`Item with ID ${item} not found in all_product array.`);
                }
            }
        }
        return totalAmount;
    }
    
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextvalue = {getTotalCartItems,getTotalCartAmount,all_product, cartItems,addToCart,removeFromCart}

    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
