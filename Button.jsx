import HOC from "./HOC";
import React from "react";
class Button extends React.Component {

  render() {
    return (
      <div >
        <button onClick={this.props.handleClick} className="Button">
    
          {this.props.CountNumber}
        </button>
      </div>
    );
  }
}

const ButtonHoc = HOC(Button);
export default ButtonHoc;
