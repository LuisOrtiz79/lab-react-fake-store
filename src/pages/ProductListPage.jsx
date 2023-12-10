import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiURL = "https://fakestoreapi.com/products";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
    });
  }, []);


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) =>{
         return (
          <Link key={product.id} to={`/product/details/${product.id}`} >
            <div key={product.id} className="card">
                <img src={product.image} alt="product-image" />
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <p className="description">{product.description}</p>
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
