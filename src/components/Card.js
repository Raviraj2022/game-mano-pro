import React, { useEffect, useState } from "react";
// import axios from "axios";
const Card = () => {
  const [cardData, setCardData] = useState([]);
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
  console.log(cardData.products);
  return (
    <div className=" container ">
      <div className="row mt-5">
        {cardData.products &&
          cardData.products.map((card, index) => (
            <div className="col-md-4" key={index}>
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
