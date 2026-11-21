import style from './AboutUs.module.css';

function AboutUs() {
  return (
    <>
      {/* Our Story */}
      <section className={style['section-padding']}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className={style['story-visual']}>
               
                <h3>Shopping Made Simple</h3>
                <p>Discover products. Shop with confidence.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <span className={style['section-label']}>OUR STORY</span>
              <h2 className={style['section-title']}>Who We Are</h2>
              <p className={style['section-text']}>
                plazaGrid is an online shopping platform designed to make your
                shopping experience easier and more convenient.
              </p>
              <p className={style['section-text']}>
                Our goal is to provide customers with a simple platform where they
                can explore products, compare options and place orders without
                unnecessary complications.
              </p>
              <p className={style['section-text']}>
                We believe online shopping should be easy, accessible and
                customer-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className={`${style['mission-section']} ${style['section-padding']}`}>
        <div className="container">
          <div className={`text-center ${style['section-heading']}`}>
            <span className={style['section-label']}>OUR PURPOSE</span>
            <h2 className={style['section-title']}>Mission &amp; Vision</h2>
            <p className={style['section-text']}>
              What guides us and what we aim to achieve.
            </p>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-md-6">
              <div className={style['purpose-card']}>
              
                <h4>Our Mission</h4>
                <p>
                  To provide a smooth and reliable online shopping experience
                  through an easy-to-use platform, useful products and
                  customer-focused service.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={style['purpose-card']}>
              
                <h4>Our Vision</h4>
                <p>
                  To build a trusted online shopping destination where customers can
                  find what they need and enjoy a convenient shopping experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={style['section-padding']}>
        <div className="container">
          <div className={`text-center ${style['section-heading']}`}>
            <span className={style['section-label']}>WHAT MATTERS TO US</span>
            <h2 className={style['section-title']}>Our Core Values</h2>
            <p className={style['section-text']}>
              The principles behind the plazaGrid experience.
            </p>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-sm-6 col-lg-3">
              <div className={style['value-card']}>
               
                <h5>Trust</h5>
                <p>
                  Building customer confidence through clear and honest service.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className={style['value-card']}>
              
                <h5>Quality</h5>
                <p>Focusing on useful products and a better shopping experience.</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className={style['value-card']}>
               
                <h5>Customer First</h5>
                <p>Keeping customer needs at the center of our decisions.</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className={style['value-card']}>
               
                <h5>Simplicity</h5>
                <p>Making browsing and ordering easy and convenient.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={style['about-cta']}>
        <div className="container text-center">
          <h2>Ready to Start Shopping?</h2>
          <p>Explore our collection and find something you love.</p>
          <a href="products.html" className={`btn ${style['cta-btn']}`}>
            Shop Now
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
