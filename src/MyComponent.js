import React from "react";

const MyComponent = (props) => {
  return <div className="MyComponent">{props.children}</div>;
};

MyComponent.defaultProps = {
  name: "sooyoung",
};

export default MyComponent;
