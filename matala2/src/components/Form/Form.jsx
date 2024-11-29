import { Component } from "react";
import InputField from "../InputField/InputField";
import "./style.css";

class Form extends Component {
  constructor(props) {
    super(props);

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

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleMouseEnter = (field) => {
    this.setState((prevState) => ({
      showTooltip: { ...prevState.showTooltip, [field]: true },
    }));
  };

  handleMouseLeave = (field) => {
    this.setState((prevState) => ({
      showTooltip: { ...prevState.showTooltip, [field]: false },
    }));
  };

  handleScoreBlur = () => {
    const { psychometricScore } = this.state;

    if (psychometricScore >= 555) {
      this.setState({
        psychometricFeedback:
          "Congratulations! Your score is above 555, welcome to the program!",
      });
    } else if (psychometricScore < 555 && psychometricScore !== "") {
      this.setState({
        psychometricFeedback:
          "Unfortunately, your score is below 555. Please try again next year.",
      });
    } else {
      this.setState({ psychometricFeedback: "" });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      psychometricScore,
      showTooltip,
      psychometricFeedback,
    } = this.state;

    return (
      <div className="form-container">
        <h2>Fill the kind-of-form Please</h2>
        <form className="registration-form">
          {/* First Name Input */}
          <InputField
            id="first-name"
            type="text"
            name="firstName"
            value={firstName}
            // value={firstName}
            placeholder="Enter your first name"
            onChange={this.handleInputChange}
            onMouseEnter={() => this.handleMouseEnter("firstName")}
            onMouseLeave={() => this.handleMouseLeave("firstName")}
            tooltipMessage="Please fill in your first name."
            showTooltip={showTooltip.firstName}
          />

          {/* Last Name Input */}
          <InputField
            id="last-name"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter your last name"
            onChange={this.handleInputChange}
            onMouseEnter={() => this.handleMouseEnter("lastName")}
            onMouseLeave={() => this.handleMouseLeave("lastName")}
            tooltipMessage="Please fill in your last name."
            showTooltip={showTooltip.lastName}
          />

          {/* Psychometric Score Input */}
          <InputField
            id="psychometric-score"
            type="number"
            name="psychometricScore"
            value={psychometricScore}
            placeholder="Enter your score (0-800)"
            onChange={this.handleInputChange}
            onMouseEnter={() => this.handleMouseEnter("psychometricScore")}
            onMouseLeave={() => this.handleMouseLeave("psychometricScore")}
            onBlur={this.handleScoreBlur}
            tooltipMessage="Please fill in your psychometric score."
            showTooltip={showTooltip.psychometricScore}
            feedbackMessage={psychometricFeedback}
          />
        </form>
      </div>
    );
  }
}

export default Form;
