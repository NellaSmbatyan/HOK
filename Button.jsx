import HOC from "./HOC";
import React from "react";
class Button extends React.Component {

  render() {
    return (
      <div >
        <button onClick={this.props.increment} className="Button">
    
          {this.props.number}
        </button>
      </div>
    );
  }
}

const ButtonHoc = HOC(Button);
export default ButtonHoc;
