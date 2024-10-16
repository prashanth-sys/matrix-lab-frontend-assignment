import { Component } from "react";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1728967482/Group_20_ujgfe1.png"
            alt="krishna"
            className="logo"
          />
          <p className="logo-name">EhiAi</p>
        </div>
        <div className="nav-container">
          <ul className="nav-list">
            <li className="list-1">Features</li>
            <li className="list-2">Why Us</li>
            <li className="list-3">Tokenomics</li>
            <li className="list-4">Roadmap</li>
          </ul>
        </div>
        <div className="login-container">
          <button type="button" className="login-btn">Log in</button>
          <button type="button" className="background-btn">Whitepaper</button>
        </div>
        <div className="link-container">
          <img
            src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1728971620/Container_1_elfsr5.png"
            alt="link-icon"
            className="link-icon"
          />
        </div>
      </div>
    );
  }
}

export default Header;
