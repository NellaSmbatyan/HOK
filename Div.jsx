import React from "react";
import HOC from "./HOC";

class Div extends React.Component {

  render() {
    return (
      <div  className="div" onMouseOver={this.props.increment}>
      {this.props.number}
      </div>
    );
  }
}

const DivHoc = HOC(Div);
export default DivHoc;
