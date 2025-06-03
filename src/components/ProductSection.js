import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  const getImage = (imageName) => {
    try {
      return require(`../assets/images/${imageName}`);
    } catch (err) {
      console.error("Image not found:", imageName);
      return null; // fallback image if needed
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="product-section">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between pb-4">
          <div className="col">
            <h2 className="section-title">OPTICAL FIBRE CABLES</h2>
          </div>
          <div className="col-auto">
            <a href="#" className="btn btn-primary">
              MORE PRODUCTS
            </a>
          </div>
        </div>

        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-6" key={index}>
              <div
                className="product-card"
                style={{
                  backgroundImage: `url(${getImage(product.image)})`,
                }}
              >
                <div className={`overlay ${index === 1 ? "active" : ""}`}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
