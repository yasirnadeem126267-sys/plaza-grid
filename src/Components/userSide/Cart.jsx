import { useState } from "react";

let Cart=(props)=>{
const [table, setTable]=useState(false);



    return(
        <>
         {
            props.data.products.map((item, index)=>(
              <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 mb-3"  key={index}>
                     <div className="card" >
  <img src={item.img} className="card-img-top" alt="..." style={{height:"170px"}}/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Rs:{item.price}</p>
     <p className="card-text">Stock: <span style={{color:"green"}}>{item.stock}</span></p>
    <p className='card-text'>Star:{item.rating.start} Reviews: {item.rating.reviews}</p>
    
    <a href="#" className="btn btn-primary" onClick={()=>  props.add(item)}>
      Add to card
    </a>
  </div>
</div>
 </div>
 
// card end
            ))
           
         }
          <button className="btn btn-success" onClick={()=>setTable(!table)}>{table? 'Hide Cart':'Show Cart'}</button>
          {
              table &&(
                 <table>
            <tbody>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Remove</th>
                    <th>Quantity</th>
                    <th>Add</th>
                </tr>
                {
                    props.table?.map((item, index)=>(
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
export default Cart;