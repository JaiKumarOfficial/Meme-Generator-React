import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header
        style={{
          alignItems: "center",
          background: "#6441A5",
          display: "flex",
        }}
      >
        <img
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="Problem?"
          style={{
            marginTop: "0.5%",
            marginLeft: "15%",
            marginRight: "2%",
            height: "auto",
            width: "10%",
            float: "left",
          }}
        />
        <p
          style={{
            marginLeft: "3%",
            fontFamily: "VT323",
            color: "whitesmoke",
            fontSize: 70,
          }}
        >
          MEME GENERATOR
        </p>
      </header>
    );
  }
}

export default Header;
