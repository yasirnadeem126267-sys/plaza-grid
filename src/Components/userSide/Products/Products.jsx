import style from './Products.module.css'
function Products(){
    return(
        <>
        <div className='container'>
            {/* Main div */}
            <div className={`   ${style.first} pt-5`}>
           <h3>Explore  <span style={{color:"orangered"}}>Our Products</span> </h3>
           <p className='lead'>Discover quality products and find exactly what you need.</p>
            </div>
        {/* Search row */}
        <div className="row mt-3">
             {/* Col no 2 */}
            <div className="col-xxl-4 col-lg-4 col-md-12 col-sm-12 order-lg-2 order-0">
                <input type="text" placeholder='Search here...' className='form-control'/>
            </div>
            {/* Col no 1 */}
            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12  order-md-1 order-1">
                <h4>All Products</h4>
                <p className='lead'>Showing 5 products</p>
            </div>
              
               {/* Col no 3 */}
            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 order-md-3 order-1">
                <select>
                    <option value="">Default</option>
                    <option value="">Price Low to high</option>
                    <option value="">Price high to low</option>
                    <option value="">Latest</option>
                </select>
            </div>
        </div>
     {/* Products and  Sidebar row */}
     <div className="row">
    {/* Catagories $ Price filter sidebar col (1)*/}
     <div className="col-xxl-3 col-lg-3 col-md-12 col-sm-12">

     <div className="card">
  
  <div className="card-body">
    <h5 className="card-title">Categories</h5>
    {/* form check for all products */}
    <div className="form-check">
    <label htmlFor="allProducts" className='form-check-label'>All Products</label>
   <input type="radio" id='allproducts' className='form-check-input' name='categories'/>
  </div>
   {/* form check for Electronics */}
<div className="form-check">
    <label htmlFor="electronics" className='form-check-label'>Electronics </label>
   <input type="radio" id='electronics' className='form-check-input'  name='categories'/>
  </div>

   {/* form check for Fashion */}
<div className="form-check">
    <label htmlFor="fashion" className='form-check-label'>Fashions</label>
   <input type="radio" id='fashion' className='form-check-input'  name='categories'/>
  </div>

    {/* form check for Home & Living */}
<div className="form-check">
    <label htmlFor="home-living" className='form-check-label'>Home & Living</label>
   <input type="radio" id='home-living' className='form-check-input' name='categories'/>
  </div>

   {/* form check for Accessories */}
<div className="form-check">
    <label htmlFor="Accessories" className='form-check-label'>Accessories </label>
   <input type="radio" id='Accessories' className='form-check-input' name='categories'/>
  </div>
  </div>





</div>

{/* Card 2 */}
<div className="card mt-3">
 
  <div class="card-body">
    <h5 class="card-title">Price Filter</h5>
    <p class="card-text">Maximum Price</p>
    <input type="text" className='form-control' placeholder='Enter Price'/>
    <a href="#" class="btn btn-primary">Clear all Filters</a>
  </div>
</div>


     </div>
    {/* Products col (2) */}
    <div className="col-xxl-3 col-lg-3 col-md-6 col-sm12">

        <div className="card">
  <img src="/mobile2.jpg" class="card-img-top" alt="..."  height={'160px'}/>
  <div className="card-body">
    <h5 className="card-title">Mobile</h5>
    <p className="card-text">Some quick example text to build on the card title.</p>
    <a href="#" className="btn btn-primary">Add to Card</a>
  </div>
</div>

    </div>
      {/* Products col (3) */}
    <div className="col-xxl-3 col-lg-3 col-md-6 col-sm12">
     <div className="card">
  <img src="/blutooth.jpg" class="card-img-top" alt="..." height={'160px'}/>
  <div className="card-body">
    <h5 className="card-title">Blutooth</h5>
    <p className="card-text">Some quick example text to build on the card title.</p>
    <a href="#" className="btn btn-primary">Add to Card</a>
  </div>
</div>

  

    </div>
      {/* Products col (4) */}
    <div className="col-xxl-3 col-lg-3 col-md-6 col-sm12">

     <div className="card">
  <img src="/earphonex.jpg" class="card-img-top" alt="..." height={'160px'}/>
  <div className="card-body">
    <h5 className="card-title">Earphones</h5>
    <p className="card-text">Some quick example text to build on the card title.</p>
    <a href="#" className="btn btn-primary">Add to Card</a>
  </div>
</div>


        
    </div>
     </div>




        </div>
        </>
    )
}
export default Products;