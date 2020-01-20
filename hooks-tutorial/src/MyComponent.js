import React, { Component, useRef } from "react";

class MyComponent extends Component {
  id = 1;
  setId = n => {
    this.id = n;
  };
  printId = () => {
    console.log(this.id);
  };
  render() {
    return <div>MyComponent</div>;
  }
}

const RefSample = () => {
  const id = useRef(1);
  const setId = n => {
    id.current = n;
  };
  return <div>refSample</div>;
};

export default RefSample;
