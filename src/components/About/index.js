import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <hr />
    <li className="about-imgs">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="img-lg"
        alt="about"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="img-sm"
        alt="about"
      />
    </li>
  </div>
)

export default About
