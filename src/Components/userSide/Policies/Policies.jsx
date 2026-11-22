import style from './Policies.module.css'
import { Link } from 'react-router-dom';
let Policies=()=>{
    return(
        <>
        <div className="container">
            {/* Top banner */}
            <div className={` ${style['top-banner']}   justify-content-center pt-5`}>
                <span  style={{color:"orangered"}} className='h6'>CUSTOMER INFORMATION</span> 
                <p className='display-6'>Shipping <span style={{color:"orangered"}}>& Delivery Policy</span></p>
                <p className='lead'>Everything you need to know about how your plazaGrid orders are delivered.</p>
            </div>
       
        {/* Boxes */}
        <div className='row'>
            {/* col no 1 */}
         <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12">
            {/* Box 1 */}
            <div className={`${style.box} d-flex flex-column align-items-start p-5 shadow mt-3`}>
                <i>Icon will come here</i>
               <strong className='display-6'>1. Delivery Process</strong>
            </div>
          
          {/* Box 2 */}
           
          <div className={`${style.box} d-flex flex-column align-items-start p-5 shadow mt-3`}>
                <i>Icon will come here</i>
               <strong className='display-6'>2. Delivery Time</strong>
            </div>
  

   {/* Box 3 */}
           
          <div className={`${style.box} d-flex flex-column align-items-start p-5 shadow mt-3`}>
                <i>Icon will come here</i>
               <strong className='display-6'>3. Delivery Charges</strong>
            </div>
  {/* Box 4 */}
           
          <div className={`${style.box} d-flex flex-column align-items-start p-5 shadow mt-3`}>
                <i>Icon will come here</i>
               <strong className='display-6'>4. Delivery Address</strong>
            </div>

 {/* Box 5 */}
           
          <div className={`${style.box} d-flex flex-column align-items-start p-5 shadow mt-3`}>
                <i>Icon will come here</i>
               <strong className='display-6'>5. Order Tracking</strong>
            </div>

 {/* Box 6 */}
           
          <div className={`${style.box} d-flex flex-column align-items-start p-5 shadow mt-3`}>
                <i>Icon will come here</i>
               <strong className='display-6'>6. Delivery Issues</strong>
            </div>

 {/* Box 7 */}
           
          <div className={`${style.box} d-flex flex-column align-items-start p-5 shadow mt-3`}>
                <i>Icon will come here</i>
               <strong className='display-6'>7. Receiving Your Order</strong>
            </div>


         </div>

           
        
         {/* col no 2 */}
         <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12">

        {/* Box1 of Col 2 */}
          <div className={`${style['fix-box1']} mt-3 shadow pt-5`}>
            <i>Icon will came here</i>
            <h3>Need Help?</h3>
            <button className={` ${style['fix-button'] }  mt-4 btn` } >Contact Support</button>
          </div>

          {/* Box2 of Col 2 */}
          <div className={`${style['fix-box1']} mt-3 shadow pt-5`}>
            <i>Useful Links</i>
            <h3>Need Help?</h3>
            {/* Links div */}
            <div className='mt-5 d-flex flex-column'>
               <Link className={`${style.hovers} lead`}>Frequently ask questions</Link>
            <Link className={`${style.hovers} lead`}>My Orders</Link>
            <Link className={`${style.hovers} lead`}>Return & Refund polices</Link>
            </div>
          
            
          </div>


         </div>
        </div>

         </div>
        </>
    )
}
export default Policies;