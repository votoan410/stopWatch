import React from "react";

export default function withCounter(WrappedComponent) {
  class WithCounter extends React.Component {
    state = {
      count: 0,
    };

    handleAdd = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    handleSub = () => {
      this.setState((prevState) => {
        return { count: prevState.count - 1 };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          handleAdd={this.handleAdd}
          handleSub={this.handleSub}
        />
      );
    }
  }

  return WithCounter;
}
