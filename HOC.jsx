import React from "react";

const AllComponent = (OldComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0, number: 1 };
      this.handleClick = this.handleClick.bind(this);
      this.onMouseOver = this.onMouseOver.bind(this);
    }

    handleClick() {
      this.setState({ count: this.state.count + 1 });
    }
    onMouseOver() {
      this.setState({ number: this.state.number + 1 });
    }
    render() {
      return (
        <OldComponent
          handleClick={this.handleClick}
          onMouseOver={this.onMouseOver}
          CountNumber={this.state.count}
          Number={this.state.number}
        />
      );
    }
  };
};

export default AllComponent;
