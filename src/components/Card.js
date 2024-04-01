import Aos from "aos";
import React, { useEffect, useState } from "react";
// import axios from "axios";
const Card = () => {
  const [cardData, setCardData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        // console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCardData(data);
        // console.log(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        // console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data); // Assuming the response is an array of category objects
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  // console.log(cardData.products, categories);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  let filteredProducts = cardData.products || []; // Default to all products if no filter is applied

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  } else {
    <p>Data Not found..</p>;
  }
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  // console.log(cardData);
  return (
    <div className=" container">
      <div className="row ">
        <div className="col-md-12 mb-4">
          <select
            className="form-select mt-5 w-100%"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">
              <h3>All Categories</h3>
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* {cardData.products &&
          cardData.products.map((card, index) => ( */}
        {filteredProducts.map((card, index) => (
          <div className="col-md-4  mt-5" data-aos="fade-left" key={index}>
            <div className="card">
              <img
                src={card.thumbnail}
                className="card-img-top"
                alt={card.alt}
                style={{ height: "200px", width: "100%" }}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text truncate">{card.description}</p>
                <a href={"/products/" + card.id} className="btn btn-primary">
                  view more...
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
