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

  handleColorChange = (color) => {
    this.setState({ backgroundColor: color });
  };

  render() {
    const COLORS = [
      { name: "Coral", hex: "#FF6F61" },
      { name: "Deep Purple", hex: "#6B5B95" },
      { name: "Greenery", hex: "#88B04B" },
      { name: "Rose Quartz", hex: "#F7CAC9" },
      { name: "Serenity Blue", hex: "#92A8D1" },
      { name: "Yellow Sunshine", hex: "#FFE156" },
      { name: "Orange Sunset", hex: "#FF5722" },
      { name: "Coffee Brown", hex: "#3E2723" },
      { name: "Teal", hex: "#00897B" },
      { name: "Raspberry", hex: "#D81B60" },
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
              key={color.hex}
              color={color.hex}
              name={color.name}
              onClick={this.handleColorChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Container_Btns;
