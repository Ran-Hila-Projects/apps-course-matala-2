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
      "red",
      "blue",
      "green",
      "yellow",
      "pink",
      "purple",
      "orange",
      "brown",
    ];
    return (
      <div
        style={{
          backgroundColor: this.state.backgroundColor,
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2>Select a Background Color</h2>
        {COLORS.map((color) => (
          <ColorBtn
            key={color}
            color={color}
            onClick={this.handleColorChange}
          />
        ))}
      </div>
    );
  }
}

export default Container_Btns;
