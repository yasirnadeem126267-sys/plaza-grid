import React from 'react'

function FAQ() {
  return (
    <>
     {/* Main div */}
        <div>
             <h6 style={{color:"#ff6b35"}}> How can we help?</h6>
             <h2>Find Your Answers</h2>
             <p style={{color:"#666666"}}>Choose a question below to see its answer.</p>
             {/*=== Accordiona div one ===*/}
            
             <div className="accordion mt-3" id='main-accordion1'>
                <h3>Order and Shopping</h3> 
                {/* Accordion item 1 */}
                <div className="accordion-item">
                  <h4 className="accordion-header">  <button className='accordion-button' data-bs-toggle="collapse" data-bs-target="#question11">How can I place an order?</button> </h4>
                  {/* body of item 1 */}
                  <div id='question11'   data-bs-parent="#main-accordion1" className='accordion-collapse collapse'>
                  <p className="accordion-body">Browse our products, open the product you want, add it to your cart and proceed to checkout. Enter your delivery details and place your order.</p>
                  </div>
                 
                </div>
               {/*=== Accordion item 2 ===*/}
               <div className="accordion-item">
                <h4 className="accordion-header">  <button className='accordion-button' data-bs-toggle="collapse" data-bs-target="#question12">Can I order without creating an account</button></h4>
                 {/* body of item 2 */}
                 <div id='question12' data-bs-parent="#main-accordion1" className='accordion-collapse collapse'>
                  <p className="accordion-body">Account requirements depend on the store's final ordering policy. Please check the available checkout options or contact our support team.</p>
                 </div>
                
               </div>
                {/*=== Accordion item 3 ===*/}
                <div className="accordion-item">
                    <h4 className="accordion-header">  <button className='accordion-button' data-bs-toggle="collapse" data-bs-target="#question13">How can I view my orders</button></h4>
                     {/* body of item 3 */}
                     <div id='question13' data-bs-parent="#main-accordion1" className=' accordion-collapse  collapse'>
                        <p className="accordion-body">Open the My Orders page from the navigation menu to view your order history and details.</p>
                     </div>
                   
                </div>
             </div>


              {/*=== Accordiona div Two ===*/}
             <div className="accordion" id='main-accordion2 mt-3'>
              <h3>Payments</h3>
                {/* Accordion item 1 */}
                <div className="accordion-item">
                  <h4 className="accordion-header">  <button className='accordion-button' data-bs-toggle="collapse" data-bs-target="#question21">Which payment method is avalaible?</button> </h4>
                  {/* body of item 1 */}
                  <div id='question21'   data-bs-parent="#main-accordion2" className='accordion-collapse collapse'>
                  <p className="accordion-body">Cash on Delivery (COD) is currently the demonstration payment option on this website. Other payment methods may be added later.</p>
                  </div>
                 
                </div>
               {/*=== Accordion item 2 ===*/}
               <div className="accordion-item">
                <h4 className="accordion-header">  <button className='accordion-button' data-bs-toggle="collapse" data-bs-target="#question22">Are there any delivery charges?</button></h4>
                 {/* body of item 2 */}
                 <div id='question22' data-bs-parent="#main-accordion2" className='accordion-collapse collapse'>
                  <p className="accordion-body">The current demo checkout applies a fixed delivery charge of Rs. 250 per order. Actual delivery charges should be confirmed according to the store's policy.</p>
                 </div>
                
               </div>
                {/*=== Accordion item 3 ===*/}
                <div className="accordion-item">
                    <h4 className="accordion-header">  <button className='accordion-button' data-bs-toggle="collapse" data-bs-target="#question23">Is it safe to use my credit/debit card or online wallet on your website?</button></h4>
                     {/* body of item 3 */}
                     <div id='question23' data-bs-parent="#main-accordion2" className=' accordion-collapse  collapse'>
                        <p className="accordion-body">Yes, 100%. All online transactions on our website are processed through encrypted and secure payment gateways. </p>
                     </div>
                   
                </div>
             </div>






        </div>
    </>
  )
}

export default FAQ;