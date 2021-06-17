import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props: { show?: boolean }) => {
  console.log("DemoOutput Running");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
