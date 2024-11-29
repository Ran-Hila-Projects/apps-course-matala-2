import { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

class ColorBtn extends Component {
  handleClick = () => {
    const { color, onClick } = this.props;
    onClick(color);
  };

  render() {
    const { color, name } = this.props;
    return (
      <div className="color-btn">
        <button
          className="btn"
          style={{
            backgroundColor: color,
          }}
          onClick={this.handleClick}
        >
          {name}
        </button>
      </div>
    );
  }
}

ColorBtn.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ColorBtn;
