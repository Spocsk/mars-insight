import React, { Component } from 'react';
import Footer from "./Footer"
import "../styles/header.css"

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
            <div className="header-right-bloc">
                <a className="link" href="https://mars.nasa.gov/insight/weather/" target="_blank">
                    <div className="link-credit">Credit:  NASA/JPL-Caltech/Cornell/CAB</div>
                    <div className="link-plus">+</div>
                </a>
            </div>
        </div>
            <div className="container">
                <div className="container-data">
                    <h1 className="title">Latest Weather <br></br> at Elysium Planitia</h1>
                    <p className="subtitle">InSight has temporarily suspended daily weather measurements. As more data becomes available, it will appear below. Meanwhile, get the latest Mars weather from the <a>Curiosity Rover.</a></p>
                    <div className="data">
                        <div className="data-left">
                            <span className="marsDate">Sol 681</span>
                            <span className="earthDate">October 25, 2020</span>
                        </div>
                        <div className="data-right">
                            <span className="marsDate">Sol 681</span>
                            <span className="earthDate">October 25, 2020</span>
                        </div>
    
                    </div>
                </div>
                <Footer />
            </div>
      </div>
    )
  }
}

export default Header;