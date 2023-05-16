import React from "react";

const HolaMundo = (props) => {
  return <h1>Hello {props.name}!</h1>
};
const HiFriend = () => {
  return <HolaMundo name= "My Friend"/>
}

export default HiFriend;
