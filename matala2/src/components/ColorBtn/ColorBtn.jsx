import { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

class ColorBtn extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const { color, onClick } = this.props;
    onClick(color);
  };

  render() {
    const { color } = this.props;
    return (
      <button
        style={{
          backgroundColor: color,
          color: "white",
          border: "2px solid black",
          padding: "10px",
          margin: "5px",
          cursor: "pointer",
        }}
        onClick={this.handleClick}
      >
        {color}
      </button>
    );
  }
}

ColorBtn.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ColorBtn;
