import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="about-container">
    <Header />
    <hr />
    <li className="home-imgs">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="img-lg"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="img-sm"
        alt="home"
      />
    </li>
  </div>
)

export default Home
