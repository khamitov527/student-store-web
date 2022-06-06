import Stars from "../Stars/Stars"
import codepath from "../../assets/codepath.svg"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { formatPrice } from "../../utils/format"
import "./ProductCard.css"
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, quantity, addToCart, removeFromCart }) {
  let navigate = useNavigate();
  return (
    <div className="ProductCard">
      <div className="media">
        {product.image ? 
          <img 
            src={product.image} 
            alt="product cover"
            onClick={() => {
              navigate("/" + product.id);
            }}
          /> 
          : 
          <img 
            src={codepath} 
            alt="product cover"
            onClick={() => {
              navigate("/" + product.id);
            }} 
          />
        }
      </div>
      <div className="product-info">
        <div className="info">
          <p className="product-name">
            {product.name}
          </p>

          <Stars rating={4} max={5} />
          <p className="product-price">{formatPrice(product.price)}</p>
        </div>
        <div className="actions">
          <div className="buttons">
            <i >
              <AddCircleIcon className="material-icons" onClick={addToCart}/>
            </i>
            <i >
              <RemoveCircleIcon className="material-icons" onClick={removeFromCart}/>
            </i>
          </div>

          {quantity ? (
            <span className="quantity">
              <span className="amt">{quantity}</span>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  )
}
