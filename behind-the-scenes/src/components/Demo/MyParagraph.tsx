import React, { ReactNode } from "react";

const MyParagraph = (props: {children: ReactNode}) => {
  console.log('MyParagraph Running');
  return <p>{props.children}</p>;
};

export default MyParagraph;
