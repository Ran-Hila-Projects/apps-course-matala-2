import { Component } from "react";
import Tooltip from "../TooltipForm/TooltipForm";
import "./style.css";

class Form extends Component {
  constructor(props) {
    super(props);

    // State to manage input values, tooltip visibility, and feedback messages
    this.state = {
      firstName: "",
      lastName: "",
      psychometricScore: "",
      showTooltip: {
        firstName: false,
        lastName: false,
        psychometricScore: false,
      },
      message: "", // General feedback message
      psychometricFeedback: "", // Feedback message for psychometric score validation
    };
  }

  // Handles changes in any input field and updates the corresponding state
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Shows the tooltip when the mouse enters an input field
  handleMouseEnter = (field) => {
    this.setState((prevState) => ({
      showTooltip: { ...prevState.showTooltip, [field]: true },
    }));
  };

  // Hides the tooltip when the mouse leaves an input field
  handleMouseLeave = (field) => {
    this.setState((prevState) => ({
      showTooltip: { ...prevState.showTooltip, [field]: false },
    }));
  };

  // Validates the psychometric score when the user leaves the input field (onBlur)
  handleScoreBlur = () => {
    const { psychometricScore } = this.state;

    // If the score is >= 555, show a success message
    if (psychometricScore >= 555) {
      this.setState({
        psychometricFeedback:
          "Congratulations! Your score is above 555, welcome to the program!",
      });
    }
    // If the score is < 555, show a message encouraging the user to try again
    else if (psychometricScore < 555 && psychometricScore !== "") {
      this.setState({
        psychometricFeedback:
          "Unfortunately, your score is below 555. Please try again next year.",
      });
    }
    // Clear the feedback message if the input is invalid or empty
    else {
      this.setState({ psychometricFeedback: "" });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      psychometricScore,
      showTooltip,
      message,
      psychometricFeedback,
    } = this.state;

    return (
      <div className="form-container">
        <h2>Fill the kind-of-form Please</h2>
        <form className="registration-form">
          <div className="input-wrapper">
            <label htmlFor="first-name" className="form-label">
              First name:
            </label>
            <input
              id="first-name"
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleInputChange}
              onMouseEnter={() => this.handleMouseEnter("firstName")}
              onMouseLeave={() => this.handleMouseLeave("firstName")}
              className="form-input"
              placeholder="Enter your first name"
            />
            {showTooltip.firstName && (
              <Tooltip message="Please fill in your first name." />
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="last-name" className="form-label">
              Last name:
            </label>
            <input
              id="last-name"
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange}
              onMouseEnter={() => this.handleMouseEnter("lastName")}
              onMouseLeave={() => this.handleMouseLeave("lastName")}
              className="form-input"
              placeholder="Enter your last name"
            />
            {showTooltip.lastName && (
              <Tooltip message="Please fill in your last name." />
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="psychometric-score" className="form-label">
              Psychometric Score:
            </label>
            <input
              id="psychometric-score"
              type="number"
              name="psychometricScore"
              max={800}
              min={0}
              value={psychometricScore}
              onChange={this.handleInputChange}
              onBlur={this.handleScoreBlur} // Trigger validation when the user leaves the field
              className="form-input"
              placeholder="Enter your score (0-800)"
            />
            {showTooltip.psychometricScore && (
              <Tooltip message="Please fill in your psychometric score." />
            )}
            {psychometricFeedback && (
              <p className="score-feedback">{psychometricFeedback}</p>
            )}
          </div>
        </form>
        {message && <p className="form-message">{message}</p>}
      </div>
    );
  }
}

export default Form;
