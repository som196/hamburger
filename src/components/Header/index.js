import {Link, withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>

      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button
              type="button"
              data-testid="hamburgerIconButton"
              aria-label="hamburger-icon"
            >
              <GiHamburgerMenu size="30" />
            </button>
          }
          position="center"
        >
          {close => (
            <>
              <button
                type="button"
                data-testid="closeButton"
                aria-label="close-button"
              >
                <IoMdClose size="30" color="#616e7c" onClick={() => close()} />
              </button>

              <ul className="nav-menu">
                <Link to="/" className="nav-link">
                  <li className="menu-listitem-container">
                    <AiFillHome data-testid="Home Icon" className="home-icon" />
                    <p className="home-para">Home</p>
                  </li>
                </Link>
                <Link to="/about" className="nav-link">
                  <li className="menu-listitem-container">
                    <BsInfoCircleFill
                      data-testid="About Icon"
                      className="about-icon"
                    />
                    <p className="about-para">About</p>
                  </li>
                </Link>
              </ul>
            </>
          )}
        </Popup>
      </div>
    </div>
  </nav>
)

export default withRouter(Header)
