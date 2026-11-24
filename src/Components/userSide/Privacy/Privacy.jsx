import style from './Privacy.module.css'
import { Link } from 'react-router-dom';
let Privacy=()=>{
return(
    <>
    
    <div className="container">
        {/* Hero Div */}
        <div className={` ${style['hero-div']} text-center pt-5 `}>
            <p>Security Icon will come here</p>
        <h2>Privacy Policy</h2>
        <p className='lead'>Learn how plazaGrid collects, uses and protects your personal information.</p>
        </div>
        {/* Row */}
        <div className="row">
             {/* Left side Col */}
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-12 shadow px-5 py-3 my-4">
                {/* Update paragraph heading*/}
            <h6 className='text-muted mt-3' > Last Updated: November 2026</h6>
            {/* Update Paragraph text */}
            <p className={` ${style.text}  text-muted mt-3`}>At plazaGrid, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it and how we protect it when you use our website.</p>
            {/* ===Privacy No.1 ===*/}
            <div className="mt-5">
                <h4>1. Information We Collect</h4>
                <p className=" lead">
                    When you use plazaGrid, we may collect the following information:
                </p>
                {/* list */}
                <ul>
                    <li className={` ${style.text} text-muted`}>Full name and contact information.</li>
                    <li className={` ${style.text} text-muted mt-2`}>Email address and phone number.</li>
                     <li className={` ${style.text} text-muted mt-2`}>Delivery address and city.</li>
                      <li className={` ${style.text} text-muted mt-2`}>Order details and purchase history.</li>
                       <li className={` ${style.text} text-muted mt-2`}>Information you provide through contact forms.</li>
                </ul>
            </div>
              {/* ===Privacy No.2 ===*/}
              <div className="mt-5">
                <h4>2. How We Use Your Information</h4>
                <p className=" lead">
                   Your information may be used for the following purposes:
                </p>
                {/* list */}
                <ul>
                    <li className={` ${style.text} text-muted`}>To process and manage your orders.</li>
                    <li className={` ${style.text} text-muted mt-2`}>To deliver products to your provided address.</li>
                     <li className={` ${style.text} text-muted mt-2`}>To communicate order updates and important information.</li>
                      <li className={` ${style.text} text-muted mt-2`}>To respond to your questions and support requests.</li>
                       <li className={` ${style.text} text-muted mt-2`}>To improve our website and customer experience.</li>
                </ul>
            </div>
              {/* ===Privacy No.3 ===*/}
              <div className="mt-5">
                <h4>3. Information Protection</h4>
                <p className={` ${style.text} text-muted mt-2`}>We take reasonable measures to protect your personal information against unauthorized access, misuse, alteration or disclosure.</p>
                <p  className={` ${style.text} text-muted mt-2`}>
                    However, no method of online transmission or electronic storage can be guaranteed to be completely secure.
                </p>
              </div>
                {/* ===Privacy No.4 ===*/}
              <div className="mt-5">
                <h4>4. Sharing of Information</h4>
                <p className={` ${style.text} text-muted mt-2`}>We do not sell your personal information. We may share relevant information with delivery partners or service providers when necessary to process and deliver your orders.</p>
               
              </div>
                {/* ===Privacy No.5 ===*/}
              <div className="mt-5">
                <h4>5. Cookies and Website Data</h4>
                <p className={` ${style.text} text-muted mt-2`}>Our website may use cookies or similar technologies to improve website functionality and user experience. These technologies may help remember your preferences and shopping activity.</p>
               
              </div>
                {/* ===Privacy No.6 ===*/}
              <div className="mt-5">
                <h4>6. Your Privacy Rights</h4>
                <p className={` ${style.text} text-muted mt-2`}>You may contact us to request access to, correction of, or deletion of your personal information, subject to applicable legal and operational requirements.</p>
               
              </div>
               {/* ===Privacy No.7 ===*/}
              <div className="mt-5">
                <h4>7. Third-Party Services</h4>
                <p className={` ${style.text} text-muted mt-2`}>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external services.</p>
               
              </div>
                {/* ===Privacy No.8 ===*/}
              <div className="mt-5">
                <h4>8. Changes to This Policy</h4>
                <p className={` ${style.text} text-muted mt-2`}>We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated revision date.</p>
               
              </div>
                {/* ===Privacy No.9 ===*/}
              <div className="mt-5">
                <h4>9. Contact Us</h4>
                <p className={` ${style.text} text-muted mt-2`}>If you have any questions about this Privacy Policy or how your information is handled, please contact us.</p>
               
              </div>
              <Link to="" className={`${style.hovers} ms-3`} >Contact plazaGrid Support</Link>
            </div>
              {/* Central Col */}
                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-0 col-0"></div>
            {/* Right side Col */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-12 shadow my-4">
                
                {/* ===Right side box 1=== */}
                <div className="shadow p-4 m-4 text-center">
                    
                    <h5>Your Privacy Matters</h5>
                    <p className='text-muted'>We value your trust and aim to handle your personal information responsibly.</p>

                </div>
                {/* ===Right side box 2=== */}
                <div className="shadow p-4 m-4 text-center">
                    
                    <h5>Need Help?</h5>
                    <p className='text-muted'>Have a question about your personal information?</p>
                    <button className={`${style['fix-button']} btn`}>Contact Support</button>
                </div>
                  {/* ===Right side box 3=== */}
                <div className="shadow p-4 m-4 text-center d-flex flex-column">
                    
                    <h5>Quick Links</h5>
                    <Link to="" className={`${style.link}`}>FAQ / Help Center</Link>
                    <Link to="" className={`${style.link}`}>Shipping Policy</Link>
                      <Link to="" className={`${style.link}`}>Return & Refund Policy</Link>
                      <Link to="" className={`${style.link}`}>Terms & Conditions</Link>

                </div>
            </div>
        </div>
      
         

    </div>
    </>
)
}
export default Privacy;