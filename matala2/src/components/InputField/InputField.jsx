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
  onMouseEnter = () => {}, // Default value directly in the parameters
  onMouseLeave = () => {}, // Default value directly in the parameters
  onBlur = () => {}, // Default value directly in the parameters
  tooltipMessage = "",
  showTooltip = false,
  feedbackMessage = "",
}) => {
  // Add a lable above the input with capital letter at the start
  const formatLabel = (fieldName) => {
    return fieldName
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="form-label">
        {formatLabel(name)}:
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onBlur={onBlur}
        className="form-input"
      />
      {showTooltip && <Tooltip message={tooltipMessage} />}
      {feedbackMessage && (
        <p
          className={`score-feedback ${
            feedbackMessage.includes("try again") ? "error" : ""
          }`}
        >
          {feedbackMessage}
        </p>
      )}
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onBlur: PropTypes.func,
  tooltipMessage: PropTypes.string,
  showTooltip: PropTypes.bool,
  feedbackMessage: PropTypes.string,
};

export default InputField;
