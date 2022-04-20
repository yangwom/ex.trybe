import React, { Component } from "react";

const Task = (value) => {
  return <li>{value}</li>;
};
const myArray = ["react", "beack end", "java script", "python"];
class List extends Component {
  render() {
    return  <ul>{myArray.map((tec) => Task(tec))}</ul>;
  }
}
export default List;
