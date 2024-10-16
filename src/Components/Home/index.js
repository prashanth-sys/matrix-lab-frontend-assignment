import { Component } from "react";
import Header from "../Header";
import { TiTickOutline } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF,FaCentercode } from "react-icons/fa";


import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="sp">
          <Header />
          <div className="home-page-content">
            <h1 className="main-heading">
              When Innovation <br />
              Meets <span className="span">Investment</span>
            </h1>
            <p className="descrption">Empowering Trading Through Advanced Technology</p>
            <button type="button" className="open-button">Open dApp</button>
          </div>
        </div>
        <div>
        <div className="trade-info-container">
          <div className="trade-row">
            <div className="trade-optimizer col-3">
              <img src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1728982679/Rectangle_3_pr2e31.png" alt="trade" className="trade-image" /> 
              <h1 className="heading">Trade Optimizer</h1> 
              <p className="about-trade">Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
            </div>
            <div className="market-insight col-9">
              <h1 className="heading">Market Insight</h1> 
              <p className="about-trade">Stay ahead of the market. Get real-time <br /> updates on market trends, track top traders' <br /> movements, and spot signals from key <br /> influencers.</p>
            </div> 
            <div className="risk-guard">
                <h1 className="heading">Risk guard</h1> 
                <p className="about-trade">Get alerts on market swings <br /> and potential risks before <br /> they impact your portfolio. <br /> This agent helps you <br /> navigate volatility and stay <br /> prepared for anything.</p> 
                <img src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1728982679/Rectangle_3_pr2e31.png" alt="risk" className="risk-image" />
            </div> 
            <div className="portfolio-sync">
                <h1 className="heading">Portfolio Sync</h1> 
                <p className="about-trade">Easily manage your portfolio. <br /> You'll always know what you <br /> own, how it's performing, and <br /> where it’s headed.</p>
            </div> 
            <div className="opportunity-scout">
                <div>
                <h1 className="heading">Opportunity Scout</h1> 
                <p className="about-trade">Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.</p>
                </div> 
                <div>
                    <img src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1728984520/Group_1_paigb0.png" alt="krishna" className="scout-image" />
                </div>
            </div>
          </div>
          <div className="about-ethai-container">
            <h1 className="ethai-heading">About EthAi</h1> 
            <p className="descrption">At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools <br /> that help traders keep up with all new market trends, track top traders’ movements.</p> 
            <button type="button" className="read-more-btn">Read More</button>
            <div className="ethai-card">
                <div className="ethai-content">
                    <img src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1728989995/graph_odesih.png" alt="ethi" className="ethai-image" />
                    <p className="image-name">Stay Ahead</p> 
                    <p className="image-info">No more guesswork—get clear, <br /> trustable insights.</p>
                </div> 
                <div className="ethai-content">
                    <img src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1728990778/wallet_tnbahp.png" alt="ethi" className="ethai-image" />
                    <p className="image-name">Know Your Assets</p> 
                    <p className="image-info">Always stay on top of how your <br /> investments are performing.</p>
                </div> 
                <div className="ethai-content">
                    <img src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1728990834/Vector_7_psrj4x.png" alt="ethi" className="ethai-image" />
                    <p className="image-name">Simple, Not Overwhelming</p> 
                    <p className="image-info">Our tools are designed to make <br /> complex market analysis easy to <br /> understand and act on.</p>
                </div> 
                <div className="ethai-content">
                    <img src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1728990881/Future_Technology_urmduw.png" alt="ethi" className="ethai-image" />
                    <p className="image-name">Future-Proof</p> 
                    <p className="image-info">We’re constantly improving, adding <br /> new features to help you make the <br /> most informed decisions possible.</p>
                </div>
            </div>
         </div> 
         <div className="tokenomics-container">
            <h1 className="tokenomics-heading">Tokenomics</h1>
            <div className="tokenomics-details-container">
                <div className="tokenomic-chart">
                <img src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1728995165/Donut_dvyqsf.png" alt="graph" className="pie-chart" />
                </div>
                <div className="chart-details">
                <ul className="chart-info-1">
                    <li className="list-1">Name           : EthAi</li>
                    <li className="list-2">Token Name     : $EthAi</li>
                    <li className="list-3">Token standars : ERC20</li>
                    <li className="list-4">Blockchain     : Ethereum</li>
                    <li className="list-4">Total Supply   : 100 Million</li>
                    <li className="list-5">Tax            : 5%/5%</li>
                </ul> 
                <ul className="chart-info-2">
                    <li className="list-1">Team    : 35%</li> 
                    <li className="list-2">Marketing    : 5%</li>
                    <li className="list-3">Liquidity Pool    : 90%</li>
                </ul>
                </div>
             </div>
            </div> 
            <div className="roadmap-container">
            <h1 className="roadmap-heading">Roadmap</h1> 
            <div className="roadmap-info-1">
                <div className="phase-1-info">
                    <button className="phase-1">PHASE 1</button> 
                    <h1 className="phase-name-1">Kicking Off</h1> 
                    <div className="captions">
                        <TiTickOutline className="tick" /> 
                        <p className="tick-info">Launch of EthAi: Officially</p>
                    </div>
                    <div className="captions">
                        <TiTickOutline className="tick" /> 
                        <p className="tick-info">Development of Core AI Agents</p>
                    </div>
                    <div className="captions">
                        <TiTickOutline className="tick" /> 
                        <p className="tick-info">User Onboarding Campaign</p>
                    </div>
                    <div className="captions">
                        <TiTickOutline className="tick" /> 
                        <p className="tick-info">Community Engagement Initiatives</p>
                    </div>
                </div> 
                <div className="phase-1-image-info">
                    <img src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1729049583/Container_3_bg9irw.png" alt="road-1" className="phase-image" />
                </div>
            </div> 
            <div className="roadmap-info-2">
                <div className="phase-2-image-info">
                    <img src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1729050301/Background_w8bohg.png" alt="road-2" className="phase-image" />
                </div> 
                <div className="phase-2-info">
                <div className="phase-1-info">
                    <button className="phase-1">PHASE 2</button> 
                    <h1 className="phase-name-1">Bigger Insights</h1>
                    <div className="captions">
                        <TiTickOutline className="tick" /> 
                        <p className="tick-info">Introduction of Advanced AI Agents</p>
                    </div>
                    <div className="captions">
                        <TiTickOutline className="tick" /> 
                        <p className="tick-info">Strategic Partnerships</p>
                    </div>
                    <div className="captions">
                        <TiTickOutline className="tick" /> 
                        <p className="tick-info">User Interface Optimization</p>
                    </div>
                    <div className="captions">
                        <TiTickOutline className="tick" /> 
                        <p className="tick-info">Comprehensive Marketing Campaign</p>
                    </div>
                </div> 
                </div>
            </div> 
            <div className="roadmap-info-3">
                <div className="phase-3-info">
                    <button className="phase-1">PHASE 3</button> 
                    <h1 className="phase-name-1">Full Power</h1> 
                    <div className="captions">
                        <TiTickOutline className="tick-1" /> 
                        <p className="tick-info">Launch of EthAi: Officially</p>
                    </div>
                    <div className="captions">
                        <TiTickOutline className="tick-1" /> 
                        <p className="tick-info">Development of Core AI Agents</p>
                    </div>
                    <div className="captions">
                        <TiTickOutline className="tick-1" /> 
                        <p className="tick-info">User Onboarding Campaign</p>
                    </div>
                    <div className="captions">
                        <TiTickOutline className="tick-1" /> 
                        <p className="tick-info">Community Engagement Initiatives</p>
                    </div>
                </div> 
                <div className="phase-1-image-info">
                    <img src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1729052234/Background_1_dfmmh9.png" alt="road-1" className="phase-image" />
                </div>
            </div> 
           <div className="footer-container">
           <div className="questions-container">
                <h1 className="question-heading">Frequently Asked <br />
                Questions</h1> 
                <div className="question-list">
                <div className="captions">
                        <FiPlus className="tick-2" /> 
                        <p className="tick-info">What is EthAi?</p>
                    </div>
                    <div className="captions">
                        <FiPlus className="tick-2" /> 
                        <p className="tick-info">How can EthAi can help me as a Trader?</p>
                    </div>
                    <div className="captions">
                        <FiPlus className="tick-2" /> 
                        <p className="tick-info">Who can use EthAi?</p>
                    </div>
                    <div className="captions">
                        <FiPlus className="tick-2" /> 
                        <p className="tick-info">How does EthAi track smart money flow?</p>
                    </div>
                    <div className="captions">
                        <FiPlus className="tick-2" /> 
                        <p className="tick-info">How does ensure data security?</p>
                    </div>
                </div>
            </div> 
            <div className="aboutus-container">
                <h1 className="aboutus-heading">Explore Our <span className="span-2">dApp</span></h1>
                <p className="aboutus-info">EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.</p>
                <button className="read-more-btn" type="button">Open dApp</button>
            </div>
           </div> 
           <div className="last-footer-section">
            <div className="social-media-section">
            <div className="web-logo-container">
            <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1728967482/Group_20_ujgfe1.png"
                alt="krishna"
                className="web-logo"
                />
                <p className="web-logo-name">EhiAi</p>
        </div> 
        <div>
            <PiTelegramLogoLight className="social-app" />
            <CiInstagram className="social-app" />
            <RiTwitterXFill className="social-app" />
            <FaFacebookF className="social-app" />
            <FaCentercode className="social-app" />
        </div>
        </div> 
        <div className="about-website">
            <h1 className="web-heading">“Designed for traders of <br /> today, just like you."</h1> 
            <input type="text" className="input" placeholder="What is your Work Email?.." />
        </div>
        </div>
        </div>              
        </div> 
       </div>
      </div>
    );
  }
}

export default Home;
