import React from "react";

const HOC = (OldComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  number: 1 };
      this.increment = this.increment.bind(this);
   
    }

    increment() {
      this.setState({number: this.state.number + 1 });
    }
  
    render() {
      return (
        <OldComponent
          increment={this.increment}
          
         
          number={this.state.number}
        />
      );
    }
  };
};

export default HOC;
