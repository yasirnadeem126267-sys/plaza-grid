
import React from "react";
import styles from "./SaleBanner.module.css";

function SaleBanner() {
    return (
     <div className="container my-4">
       <div className={`${styles.banner} row align-items-center rounded-3 p-4 p-md-5`}>

            <div className="col-md-7">
                <p className="text-uppercase fw-semibold mb-2">
                Special Offers
           </p>

       <h2 className="fw-bold">
                Shop More, Save More!
        </h2>

         <p className="mb-4">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolore pariatur vel hic odio eos, magni sint minus dolores. 
              </p>

            <h1 className="fw-bold mb-3">
           Up to 40% Off
       </h1>

            <button className={`btn ${styles.button}`}>
                Shop Now
          </button>
                </div>

                <div className="col-md-5 text-center mt-4 mt-md-0">
                <img
                 src="/images/sale-products.webp"
                 alt="Sale products"
                   className="img-fluid"
                    />
                </div>

            </div>
        </div>
    );
}

export default SaleBanner;
