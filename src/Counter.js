import React from "react";

class Counter extends React.Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          BUTTON 1
        </button>
        <button
          onClick={() => {
            this.setState({ fixedNumber: fixedNumber + 1 }, () => {
              console.log(this.state);
            });
          }}
        >
          BUTTON 2
        </button>
      </div>
    );
  }
}

export default Counter;
