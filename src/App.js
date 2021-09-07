import "./App.css";
import React, { Component } from "react";
import { Cars } from "./Cars";
import ReactPlayer from "react-player";

class App extends Component {
  state = {
    type: "Super Cars",
    info: [],
  };

  // componentDidMount() {
  //   this.setState({ info: Cars });
  //   console.log("ComponentDidMount");
  // }
  handleChange = (event) => {
    this.setState({ type: event.target.value });
  };
  handleClick = () => {
    this.setState({ info: Cars });
  };
  handleb2 = () => {
    this.setState({ info: [] });
  };
  handleClick3 = () => {
    if (this.state.type == "Super Cars") {
      this.setState({ info: Cars });
    }
  };
  render() {
    return (
      <div className="App">
        <select class="s1" value={this.state.type} onChange={this.handleChange}>
          <option>Super Cars</option>
          <option>Expensive Cars</option>
          <option>Fast Cars</option>
          <option>Drift Cars</option>
        </select>
        <button onClick={this.handleClick3}>Show</button>

        <button onClick={this.handleClick} class="b1">
          Visualize Cars
        </button>
        {/* <button class="b2" onClick={this.handleb2}>
          Hide Cars
        </button> */}

        <div>
          <div>
            <h4>Intro Videos</h4>
          </div>

          <ReactPlayer
            className="v1"
            url="https://www.youtube.com/watch?v=9kVGdXEvTJ8"
            controls
            volume="0.5"
            height="250px"
            width="450px"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=5xy4n73WOMM"
            controls
            height="250px"
            width="450px"
          />
          <div>
            <h5>Gameplay Videos</h5>
          </div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=KuV5aeSUxPo"
            controls
            height="250px"
            width="450px"
          />
          <ReactPlayer
            className="v2"
            url="https://www.youtube.com/watch?v=kfI31yDiaPY"
            controls
            height="250px"
            width="450px"
          />
        </div>
        <br />
        {this.state.info.map((value, index) => {
          return (
            <div>
              <img
                alt="Cars"
                src={this.state.info[index].image}
                width="700"
                height="400"
              />
              <h2>Name: {this.state.info[index].name}</h2>
              <p>Rating: {this.state.info[index].rating}</p>
              <h3>Price: {this.state.info[index].price}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
