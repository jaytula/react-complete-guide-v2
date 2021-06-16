import React from "react";

const DemoOutput = (props: {show?: boolean}) => {
  console.log('DemoOutput Running');
  return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default DemoOutput;
