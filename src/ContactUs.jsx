import React from 'react'
import './ContactUs.css'
function ContactUs() {
  return (
   <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Documents</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
  />
  
  {/* Main Content */}
  <main className="container py-5">
    <div className="page-heading text-center mb-5">
      <h2>Contact Us</h2>
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. possimus nihil
        accusamus quisquam rerum molestiae doloribus adipisci natus.
      </p>
    </div>
    <div className="row g-4">
      {/* Contact Information */}
      <div className="col-lg-4">
        <div className="contact-info-card">
          <h4>Multiple options</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            soluta expedita perspiciatis reprehenderit.
          </p>
          <div className="contact-item">
            <div>
              <h6>Email</h6>
              <p>plazaGrid@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div>
              <h6>Phone</h6>
              <p>+92 300 1234567</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"></div>
            <div>
              <h6>Address</h6>
              <p>Pakistan</p>
            </div>
          </div>
          <div className="contact-item">
            <div>
              <h6>Working Hours</h6>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="col-lg-8">
        <div className="contact-form-card">
          <h4>Send Us a Message</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <form id="contactForm">
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="contactName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactName"
                  placeholder="Enter your name"
                  minLength={3}
                  required=""
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="contactEmail" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="contactEmail"
                  placeholder="Enter your email"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input
                  type=""
                  className="form-control"
                  id="contactPhone"
                  placeholder="Enter Mobile"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Subject</label>
                <input
                  className="form-control"
                  id="contactPhone"
                  placeholder="Enter Subject"
                  required=""
                />
              </div>
              <div className="col-12">
                <label className="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  id="contactMessage"
                  rows={5}
                  placeholder="Write your message here..."
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button className="btn btn-orange px-4 py-2">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</>

  )
}

export default ContactUs