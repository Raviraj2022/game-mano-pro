import Aos from "aos";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePageProduct = () => {
  const [product, setProduct] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col-md-6" data-aos="fade-right">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 bg-info rounded" data-aos="fade-left">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p className="fw-bold">Stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
          <p>
            Category:{" "}
            <span className="bg-primary rounded">{product.category}</span>
          </p>
          <div className="d-flex justify-content-end mt-5">
            <button className="bg-danger rounded">Buy now</button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Product Images</h3>
          <div className="row">
            {product.images.map((image, index) => (
              <div className="col-md-3" key={index} data-aos="fade-up">
                <div
                  className={`image-container ${
                    index === hoveredIndex ? "hovered" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageProduct;
