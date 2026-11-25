
import React from 'react';
import styles from './History.module.css';

function History() {

    const orders = [
        {
            id: 1024,
            date: '18 November 2026',
            status: 'Delivered',
            name: 'HP Core i5 Laptop',
            image: '/images/laptop.webp',
            price: 85000,
            quantity: 1
        },
        {
            id: 1025,
            date: '22 November 2026',
            status: 'Processing',
            name: 'Samsung Galaxy Mobile',
            image: '/images/mobile.webp',
            price: 20000,
            quantity: 2
        },
        {
            id: 1026,
            date: '23 November 2026',
            status: 'Shipped',
            name: 'Premium Smart Watch',
            image: '/images/watch.webp',
            price: 8000,
            quantity: 1
        }
    ];

    return (
        <div>

          
            {/* History */}
            <div className="container py-5">

                <h2 className="fw-bold mb-2">My Orders</h2>

                <p className="text-secondary mb-4">
                    Check your previous orders and their details.
                </p>

                <div className="row g-3">

                    {orders.map((order) => (

                        <div className="col-12" key={order.id}>

                            <div className="card shadow-sm">

                                <div className="card-body">

                                    <div className="d-flex flex-wrap justify-content-between mb-3">

                                        <div>
                                            <p className="text-secondary mb-1">
                                                Order ID
                                            </p>

                                            <h6 className="fw-bold">
                                                PG-{order.id}
                                            </h6>
                                        </div>

                                        <div>
                                            <p className="text-secondary mb-1">
                                                Order Date
                                            </p>

                                            <h6 className="fw-bold">
                                                {order.date}
                                            </h6>
                                        </div>

                                        <div>
                                            <p className="text-secondary mb-1">
                                                Status
                                            </p>

                                            <span className={`badge ${
                                                order.status === 'Delivered'
                                                    ? 'bg-success'
                                                    : order.status === 'Shipped'
                                                    ? 'bg-info'
                                                    : 'bg-warning text-dark'
                                            }`}>
                                                {order.status}
                                            </span>
                                        </div>

                                    </div>


                                    <hr />


                                    <div className="row align-items-center g-3">

                                        <div className="col-4 col-md-2">

                                            <img
                                                src={order.image}
                                                alt={order.name}
                                                className={`img-fluid ${styles.productImage}`}
                                            />

                                        </div>


                                        <div className="col-8 col-md-5">

                                            <h6 className="fw-bold">
                                                {order.name}
                                            </h6>

                                            <p className="text-secondary mb-1">
                                                Quantity: {order.quantity}
                                            </p>

                                            <p className="fw-semibold mb-0">
                                                Rs. {order.price.toLocaleString()}
                                            </p>

                                        </div>


                                        <div className="col-6 col-md-2">

                                            <p className="text-secondary mb-1">
                                                Total
                                            </p>

                                            <h6 className="fw-bold">
                                                Rs. {(order.price * order.quantity).toLocaleString()}
                                            </h6>

                                        </div>


                                        <div className="col-6 col-md-3">

                                            <button
                                                className="btn btn-outline-warning w-100"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#details${order.id}`}
                                            >
                                                Order Details
                                            </button>

                                        </div>

                                    </div>


                                    {/* Details */}
                                    <div className="collapse mt-3" id={`details${order.id}`}>

                                        <div className="bg-light p-3 rounded">

                                            <h6 className="fw-bold">
                                                Order Details
                                            </h6>

                                            <p className="mb-1">
                                                Payment Method: Cash on Delivery
                                            </p>

                                            <p className="mb-1">
                                                Shipping Charges: Rs. 500
                                            </p>

                                            <p className="mb-0">
                                                Total Bill: Rs. {(order.price * order.quantity + 500).toLocaleString()}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>


           

        </div>
    );
}

export default History;
