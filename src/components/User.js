import { useState } from "react";

const User = (props) => {
    const [count,setCount]=useState(0);
  return (
    <div>
      <div>Functional component</div>
      <div>{props.name}</div>
      <div>Count: {count}</div>
      <button onClick={()=>{
       setCount(count+1);
      }}>Increase Count</button>
      <div>Swiggy</div>
    </div>
  );
};

export default User;
