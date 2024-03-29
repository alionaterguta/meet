import { Component } from "react";
class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }
  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px",
    };
  };
  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(0, 0, 255)"; // blue
    this.bgColor = "rgb(220, 220, 255)";
  }
}
export { InfoAlert };

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(215, 82, 82)"; //red
    this.bgColor = "rgb(252, 234,234)";
  }
}
export { ErrorAlert };

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(219, 132, 2)"; //yellow
    this.bgColor = "rgb(251, 244, 220)";
  }
}
export { WarningAlert };
