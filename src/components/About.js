import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    console.log("Parent Constructor Called");
  }

  componentDidMount(){
    console.log("Parent didMount Called");
  }

  render() {
    console.log("Parent render called");
    return (
      <div>
        <h1>About us</h1>
        <UserClass name={"first"} />
      </div>
    );
  }
}

export default About;
