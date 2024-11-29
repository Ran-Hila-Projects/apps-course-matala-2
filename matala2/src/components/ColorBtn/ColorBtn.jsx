import { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

class ColorBtn extends Component {
  // Handles the button click event and calls the onClick callback with the color value
  handleClick = () => {
    const { color, onClick } = this.props;
    onClick(color); // Pass the selected color to the parent component
  };

  render() {
    const { color, name } = this.props; // Destructure color and name props for use in the component
    return (
      <div className="color-btn">
        {/* Button styled with the background color and labeled with the color name */}
        <button
          className="btn"
          style={{
            backgroundColor: color, // Dynamically apply the button's background color
          }}
          onClick={this.handleClick} // Attach the click handler
        >
          {name} {/* Display the name of the color */}
        </button>
      </div>
    );
  }
}

// Define the expected prop types for the component
ColorBtn.propTypes = {
  color: PropTypes.string.isRequired, // The hex color value (e.g., "#FF6F61")
  name: PropTypes.string.isRequired, // The name of the color (e.g., "Coral")
  onClick: PropTypes.func.isRequired, // Callback function to handle the click event
};

export default ColorBtn;
