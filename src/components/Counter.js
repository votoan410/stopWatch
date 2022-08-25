import React from "react";
import withCounter from "./hoc/WithCounter";

class Counter extends React.Component {
  testAlert = () => {
    setTimeout(() => {
      alert(this.props.count);
    }, 10000);
  };

  render() {
    const { count, handleAdd, handleSub } = this.props;
    return (
      <div>
        <button onClick={handleAdd}>+</button>
        <span>{count}</span>
        <button onClick={handleSub}>-</button>
        <button onClick={this.testAlert}>Alert after 10s</button>
      </div>
    );
  }
}

export default withCounter(Counter);
