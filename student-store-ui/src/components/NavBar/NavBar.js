import { Link } from "react-router-dom"
import logo from "../../assets/codepath.svg"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="codepath logo" />
          </Link>
        </div>

        <div className="socials">
          <TwitterIcon style={{color: "white"}}/>
          <InstagramIcon style={{color: "white"}}/>
          <FacebookIcon style={{color: "white"}}/>
        </div>

        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#About">About Us</Link>
          </li>
          <li>
            <Link to="/#Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/#Buy">Buy Now</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
