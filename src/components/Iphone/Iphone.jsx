import { useEffect, useState } from "react";
import "./Iphone.css";

function Iphone() {
  const [iphone, setIphones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/iphone")
      .then((res) => res.json())
      .then((data) => {
        setIphones(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="iphone-container">

      {iphone.map((item, index) => {
        return (

          <div
            key={item.product_id}
            className={`iphone-section ${
              index % 2 === 0 ? "normal" : "reverse"
            }`}
          >

            <div className="iphone-image">
              <img
                src={`${item.product_img}`}
                alt={item.product_name}
              />
            </div>

            <div className="iphone-info">

              <h1>{item.product_name}</h1>

              <h3>{item.product_brief_description}</h3>

              <p>{item.product_description}</p>

              <h4>{item.starting_price}</h4>

              <h5>{item.price_range}</h5>

              <a href={item.product_link}>Learn More</a>

            </div>

          </div>
        );
      })}

    </div>
  );
}

export default Iphone;