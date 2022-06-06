import Stars from "../Stars/Stars"
import codepath from "../../assets/codepath.svg"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { formatPrice } from "../../utils/format"
import "./ProductCard.css"

export default function ProductCard({ product, quantity, addToCart, removeFromCart }) {
  return (
    <div className="ProductCard">
      <div className="media">
        {product.image ? <img src={product.image} alt="product cover" /> : <img src={codepath} alt="product cover" />}
      </div>
      <div className="product-info">
        <div className="info">
          <p className="product-name">{product.name}</p>
          <Stars rating={4} max={5} />
          <p className="product-price">{formatPrice(product.price)}</p>
        </div>
        <div className="actions">
          <div className="buttons">
            <i className="material-icons" onClick={addToCart}>
              <AddCircleIcon />
            </i>
            <i className="material-icons" onClick={removeFromCart}>
              <RemoveCircleIcon />
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
