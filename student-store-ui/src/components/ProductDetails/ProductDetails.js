import axios from "axios";
import { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

export default function ProductDetails({ addToCart }) {
  let [product, setProduct] = useState(undefined);
  let [loading, setLoading] = useState(true);
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const setup = async () => {
      await getData();
    };
    setup();
  }, []);

  async function getData() {
    setLoading(true);
    let product = await axios.get(`${process.env.REACT_APP_REMOTE_HOST_URL}/store/${paramsId}`);
    setProduct(product.data.product);
  }

  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product]);

  if (!loading) {
    let name = product.name;
    let category = product.category;
    let image = product.image;
    let description = product.description;
    let price = product.price;
    return (
        <div class="container">
            <img class="product-image" src={image} alt="" />
            <h1 className="name">{name}</h1>
            <h2 className="category">{category}</h2>
            <p className="description">{description}</p>
            <p className="price">${price}</p>
            <br />
            <div className="buttons">
                <button class="add-close" onClick={() => {addToCart(product)}}>
                    Add to cart
                </button>
                <button class="add-close" 
                    onClick={() => {navigate("/")}}
                >
                    Close
                </button>
            </div>
        </div>
    );
  }
}