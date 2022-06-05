import phone from "../../assets/phone.svg"
import giant_codepath from "../../assets/giant_codepath.svg"
import happy_person from "../../assets/happy_person.svg"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Content.css"


export default function Content() {

  const renderSocials = () => (
    <span className="socials">
      <FacebookIcon />
      <InstagramIcon />
      <LinkedInIcon />
      <TwitterIcon />
    </span>
  )
  
  return (
    <>
      <div className="Hero">
        <div className="content">
          <div className="intro">
            <h1>Welcome!</h1>
            <h1>Find Your Merch!</h1>
            <p>
              We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout
              whenever you're ready.
            </p>
          </div>

          <div className="media">
            <img src={phone} alt="hero" />
          </div>
        </div>
      </div>

      <div className="About" id="About">
      <div className="content">
        <h3>About</h3>
        <div className="summary">
          <div className="text">
            <p>
              The codepath student store offers great products at great prices from a great team and for a great cause.
            </p>
            <p>
              We've searched far and wide for items that perk the interests of even the most eccentric students and
              decided to offer them all here in one place.
            </p>
            <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
          </div>
          <div className="media">
            <img src={giant_codepath} alt="codepath large" />
          </div>
        </div>
      </div>
    </div>

    <div id="Contact" className="Contact">
      <div className="content">
        <h3>Contact Us</h3>
        <div className="summary">
          <ul className="info">
            <li>
              <span>Email:</span> code@path.org
            </li>
            <li>
              <span>Phone:</span> 1-800-CODEPATH
            </li>
            <li>
              <span>Address:</span> 123 Fake Street, San Francisco, CA
            </li>
            <li>
              <span>Socials: </span> {renderSocials()}
            </li>
          </ul>
          <div className="media">
            <img src={happy_person} alt="codepath large" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
