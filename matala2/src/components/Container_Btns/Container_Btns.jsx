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

  // Handles the background color change based on the color selected from a button
  handleColorChange = (color) => {
    this.setState({ backgroundColor: color });
  };

  render() {
    // Array of color objects containing color names and their corresponding hex values
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
      // Container whose background color changes based on the selected color
      <div
        className="container"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <h2 className="title">Select a Background Color</h2>
        {/* Buttons container that maps through the COLORS array and creates ColorBtn components */}
        <div className="buttons-container">
          {COLORS.map((color) => (
            <ColorBtn
              key={color.hex} // Unique key for each color
              color={color.hex} // Passes the hex color to the button
              name={color.name} // Passes the name of the color to the button
              onClick={this.handleColorChange} // Callback to handle color change when clicked
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Container_Btns;
