import { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

class ColorBtn extends Component {
  handleClick = () => {
    const { color, onClick } = this.props;
    onClick(color);
  };

  render() {
    const { color } = this.props;
    return (
      <button
        className="btn"
        style={{ backgroundColor: color }}
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
