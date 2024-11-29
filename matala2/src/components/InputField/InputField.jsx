import React from "react";
import PropTypes from "prop-types";
import Tooltip from "../TooltipForm/TooltipForm";
import "./style.css";

const InputField = ({
  id,
  type,
  name,
  value,
  placeholder,
  onChange,
  onMouseEnter,
  onMouseLeave,
  onBlur,
  tooltipMessage,
  showTooltip,
  feedbackMessage,
}) => (
  <div className="input-wrapper">
    <label htmlFor={id} className="form-label">
      {name.replace(/([A-Z])/g, " $1").trim()}:
    </label>
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlur={onBlur}
      className="form-input"
      placeholder={placeholder}
    />
    {showTooltip && <Tooltip message={tooltipMessage} />}
    {feedbackMessage && <p className="score-feedback">{feedbackMessage}</p>}
  </div>
);

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  tooltipMessage: PropTypes.string.isRequired,
  showTooltip: PropTypes.bool.isRequired,
  feedbackMessage: PropTypes.string,
};

InputField.defaultProps = {
  onBlur: null,
  feedbackMessage: "",
};

export default InputField;
