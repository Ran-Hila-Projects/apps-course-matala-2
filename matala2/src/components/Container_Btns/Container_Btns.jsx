import { Component } from "react";
import ColorBtn from "../ColorBtn/ColorBtn";
import "./style.css";

class Container_Btns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "white",
    };
  }

  componentDidMount() {
    console.log("Container_Btns component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.backgroundColor !== this.state.backgroundColor) {
      console.log(`Background color changed to: ${this.state.backgroundColor}`);
    }
  }

  handleColorChange = (color) => {
    this.setState({ backgroundColor: color });
  };

  render() {
    const COLORS = [
      "#FF6F61", // Coral
      "#6B5B95", // Deep purple
      "#88B04B", // Greenery
      "#F7CAC9", // Rose quartz
      "#92A8D1", // Serenity blue
      "#FFE156", // Yellow sunshine
      "#FF5722", // Orange sunset
      "#3E2723", // Coffee brown
      "#00897B", // Teal
      "#D81B60", // Raspberry
    ];

    return (
      <div
        className="container"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <h2 className="title">Select a Background Color</h2>
        <div className="buttons-container">
          {COLORS.map((color) => (
            <ColorBtn
              key={color}
              color={color}
              onClick={this.handleColorChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Container_Btns;
