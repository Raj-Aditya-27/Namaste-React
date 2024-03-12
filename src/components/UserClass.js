import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      userInfo:{
        name:"aditya",
      type:"abcd"
      }
    };

    console.log("Child constructor called");
  }

   async componentDidMount(){
    console.log("child did Mount called");
    const data = await fetch("https://api.github.com/users/Raj-Aditya-27");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo:json
    })
  }

  render() {
    console.log("Child render called");
    return (
      <div>
        <div>class component</div>
        <div>{this.state.userInfo.name}</div>
        <div>{this.state.userInfo.type}</div>
      </div>
    );
  }
}

export default UserClass;
