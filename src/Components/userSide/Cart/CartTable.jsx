import React from 'react'
import { useState } from 'react';
function CartTable(props) {
    const [table, setTable]=useState(false);
  return (
    <>
       <button className="btn btn-success" onClick={()=>setTable(!table)}>{table? 'Hide Cart':'Show Cart'}</button>
          {
              table &&(
                 <table>
            <tbody>
                <tr>
                    
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Remove</th>
                    <th>Quantity</th>
                    <th>Add</th>
                </tr>
                {
                    props.table.products?.map((item, index)=>(
                        <tr key={index} >
                            <th>{item.name}</th>
                             <th> <img src={item.img} alt="" /> </th>
                              <th>{item.price}</th>
                              <th> <button onClick={()=>props.decrease(index, item.id)}>-</button> </th>
                               <th>{props.quantity[index]}</th>
                               <th><button onClick={()=>props.increase(index, item.id)}>+</button></th>
                               
                        </tr>
                    ))
                }
            </tbody>
        </table>
              )
          }
         
       
    </>
  )
}

export default CartTable