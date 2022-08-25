import React from "react";
import withCounter from "./hoc/WithCounter";

class Stock extends React.Component {
  render() {
    const { count, handleAdd, handleSub } = this.props;
    return (
      <div>
        <button onClick={handleAdd}>+</button>
        {count}
        <button onClick={handleSub}>-</button>{" "}
      </div>
    );
  }
}

export default withCounter(Stock);
