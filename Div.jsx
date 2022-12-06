import React from "react";
import HOC from "./HOC";

class Div extends React.Component {

  render() {
    return (
      <div onMouseOver={this.props.onMouseOver}>
        <h1> {this.props.number}</h1>
      </div>
    );
  }
}

const DivHoc = HOC(Div);
export default DivHoc;
