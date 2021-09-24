import React, { createContext, useState, FunctionComponent, useCallback, useRef, useMemo } from 'react';
import { thapcam, dauxanh, quangdong, saurieng } from '../assets/images';
export type CartContextState = { 
  data:DATA[]
  addQuatity: (id:number)=>void;
};
export type DATA =  {
  id: number;
  name: string;
  img: any;
  quatity: number;
}
const contextDefaultValues: CartContextState = { 
  data:[],
  addQuatity: ()=>0,
};
export const CartContext = createContext<CartContextState>(contextDefaultValues);
  
const CartProvider: FunctionComponent = ({ children }) => {
  const [data,setData] = useState([
    {id:0,name:'Bánh trung thu thập cẩm',img:thapcam, quatity:0},
    {id:1,name:'Bánh trung thu đậu xanh',img:dauxanh, quatity:0},
    {id:2,name:'Bánh trung thu Quảng Đông',img:quangdong, quatity:0},
    {id:3,name:'Bánh trung thu sầu riêng',img:saurieng, quatity:0},
  ]);
  const addQuatity = (id:number)=>{
    const tmp: DATA[] = [...data].map((item,index)=>{
      if(item.id===id)item.quatity +=1;
      return{
        ...item
      }
    })
    setData(tmp)
  }
  return (
    <CartContext.Provider
      value={{
        data,
        addQuatity
      }}>
      {children} 
    </CartContext.Provider>
  );
};

export default CartProvider;
