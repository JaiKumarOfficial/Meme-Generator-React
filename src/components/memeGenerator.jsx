import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((data) => data.json())
      .then((jsonData) => {
        const { memes } = jsonData.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleFormChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const items = [...this.state.allMemeImgs];
    const randomUrl = items[Math.floor(Math.random() * items.length)].url;
    this.setState({ randomImg: randomUrl });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="topText"
              value={this.state.topText}
              onChange={this.handleFormChange}
              placeholder="Top text"
            />
            <br />
            <input
              type="text"
              className="form-control"
              name="bottomText"
              value={this.state.bottomText}
              onChange={this.handleFormChange}
              placeholder="Bottom text"
            />
            <br />
            <button
              className="btn btn-primary mb-2"
              onSubmit={this.handleSubmit}
            >
              Gen
            </button>
          </div>
        </form>
        <div
          style={{
            position: "relative",
            textAlign: "center",
            width: "90%",
            margin: "auto",
          }}
        >
          <img
            style={{ height: 400, width: 500 }}
            src={this.state.randomImg}
            alt=""
          />
          <h2
            style={{
              WebkitTextStroke: "1.5px black",
              fontFamily: "Impact",
              fontWeight: "bolder",
              color: "white",
              position: "absolute ",
              top: "10%",
              width: "100%",
              textAlign: "center",
            }}
          >
            {this.state.topText}
          </h2>
          <h2
            style={{
              WebkitTextStroke: "1.5px black",
              fontFamily: "Impact",
              color: "white",
              fontWeight: "bolder",
              position: "absolute ",
              top: "80%",
              width: "100%",
              textAlign: "center",
            }}
          >
            {this.state.bottomText}
          </h2>
        </div>
        <br />
      </div>
    );
  }
}

export default MemeGenerator;
