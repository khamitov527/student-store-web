import { useState } from "react"
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import "./SubNavbar.css"

export default function SubNavbar({
  activeCategory,
  setActiveCategory,
  handleOnSearchInputChange,
  searchInputValue,
}) {

  const [open, setOpen] = useState(true)
  const toggleOpen = () => setOpen((isOpen) => setOpen(!isOpen))

  return (
    <nav className="SubNavbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={searchInputValue}
              onChange={handleOnSearchInputChange}
            />
            <SearchIcon className="search-icon"/>
          </div>

          <div className="links">
            <div className="cart">
              <Link to="/shopping-cart">
                <p>My Cart</p>
                <ShoppingCartIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="hamburger-menu">
            {open ? 
              <MenuOpenIcon className="material-icons menu-icon" onClick={() => toggleOpen()}/>
              : 
              <MenuIcon className="material-icons menu-icon" onClick={() => toggleOpen()}/>
            }
            
          </div>

          <ul className={`category-menu ${open ? `open` : `closed`}`}>
            {["All Categories", "Clothing", "Food", "Accessories", "Tech"].map((cat) => (
              <li className={activeCategory === cat ? "is-active" : ""} key={cat}>
                <button onClick={() => setActiveCategory(cat)}>{cat}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
