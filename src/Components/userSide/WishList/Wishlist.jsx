
import React, { useState } from "react";
import styles from "./WishList.module.css";

function WishList() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Wireless Headphones",
            image: "/WishList/headphones.jpg",
            price: 4500,
            oldPrice: 6000,
            stock: "In Stock"
        },
        {
            id: 2,
            name: "Smart Watch",
            image: "/WishList/watch.jpg",
            price: 8000,
            oldPrice: 10000,
            stock: "In Stock"
        },
        {
            id: 3,
            name: "Casual Shoes",
            image: "/WishList/shoes.jpg",
            price: 3500,
            oldPrice: 4500,
            stock: "Out of Stock"
        },
        {
            id: 4,
            name: "Wireless Mouse",
            image: "/WishList/mouse.jpg",
            price: 1800,
            oldPrice: 2500,
            stock: "In Stock"
        }
    ]);

    const [cartCount, setCartCount] = useState(0);

    // Remove product from wishlist
    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    // Add product to cart
    const addToCart = (product) => {
        setCartCount(cartCount + 1);
        removeProduct(product.id);
    };

    return (
        <div className="bg-white min-vh-100">
            {/* Wishlist */}
            <section className="container py-5">

                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                    <div>
                        <h2 className="fw-bold mb-1">My Wishlist</h2>
                        <p className="text-secondary mb-0">
                            Your favorite products, saved for later
                        </p>
                    </div>

                    <span className="badge bg-light text-dark border fs-6">
                        {products.length} Products
                    </span>
                </div>

                {/* Product Cards */}
                {products.length > 0 ? (
                    <div className="row g-4">

                        {products.map(product => (
                            <div className="col-12 col-sm-6 col-lg-3" key={product.id}>

                                <div className={`card h-100 border rounded-3 ${styles.productCard}`}>

                                    {/* Product Image */}
                                    <div className={styles.imageBox}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className={styles.productImage}
                                        />
                                    </div>

                                    {/* Product Information */}
                                    <div className="card-body">

                                        <h5 className="fw-semibold mb-2">
                                            {product.name}
                                        </h5>

                                        <div className="mb-2">
                                            <span className="fw-bold fs-5">
                                                Rs. {product.price.toLocaleString()}
                                            </span>

                                            <span className="text-secondary text-decoration-line-through ms-2">
                                                Rs. {product.oldPrice.toLocaleString()}
                                            </span>
                                        </div>

                                        <p className={`small mb-3 ${
                                            product.stock === "In Stock"
                                                ? "text-success"
                                                : "text-danger"
                                        }`}>
                                            {product.stock}
                                        </p>

                                        {/* Buttons */}
                                        <div className="d-flex gap-2">

                                            <button
                                                className={`btn flex-grow-1 ${styles.orangeBtn}`}
                                                disabled={product.stock === "Out of Stock"}
                                                onClick={() => addToCart(product)}
                                            >
                                                Add to Cart
                                            </button>

                                            <button
                                                className={`btn btn-outline-secondary ${styles.removeBtn}`}
                                                onClick={() => removeProduct(product.id)}
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-5 border rounded-3">
                        <h4 className="fw-bold mb-2">
                            Your Wishlist is Empty
                        </h4>
                        <p className="text-secondary mb-4">
                            You haven't saved any products yet.
                        </p>
                        <a href="#" className={`btn ${styles.orangeBtn}`}>
                            Continue Shopping
                        </a>
                    </div>
                )}
            </section>
        </div>
    );
}
export default WishList;