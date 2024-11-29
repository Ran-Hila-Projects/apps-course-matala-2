import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Tooltip = ({ message }) => {
  return <div className="tooltip">{message}</div>;
};

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Tooltip;
