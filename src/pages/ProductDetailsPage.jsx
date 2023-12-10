import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const apiURL = "https://fakestoreapi.com/products";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  
  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get((`${apiURL}/${productId}`)).then((response) => {
      setProduct(response.data);
    });
  }, [product, productId]);

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      {
        product &&
          <div className="details">
            <img src={product.image}  alt="product-image"/>
            <p>{product.category}</p>
            <h1>{product.title}</h1>
            <div className="details-container">

              <p>{product.description}</p>
              <p className="price">${product.price}</p>

            </div>

          </div>
      }

      <hr />

      <Link to='/'>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
