let Cart = (props) => {
  return (
    <>
      {props.data.products.map((item) => (
        <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 mb-3" key={item.id}>
          <div className="card">
            <img
              src={item.img}
              className="card-img-top"
              alt={item.name}
              style={{ height: "170px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Rs: {item.price}</p>
              <p className="card-text">
                Stock: <span style={{ color: "green" }}>{item.stock}</span>
              </p>
              <p className="card-text">
                Star: {item.rating.start} Reviews: {item.rating.reviews}
              </p>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => props.add(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        /* card end */
      ))}
    </>
  );
};

export default Cart;
