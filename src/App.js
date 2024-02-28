/**
//Importing react and react dom using import instead of CDN
import React from "react";
import ReactDOM from "react-dom";

// createElement takes 3 argument(tag name,attributes like id,[child])
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
 */
/**
 * Create nested div
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello,I'm H1 tag.</h1>
 *          <h2>Hello,I'm H2 tag.</h2>
 *      </div>
 * </div>
 */

/**
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello,I'm H1 tag."),
    React.createElement("h2", {}, "Hello,I'm H2 tag."),
  ])
);

root.render(parent);
*/

//Video No. - 03
// import React from "react";
// import ReactDOM from "react-dom/client";

//React.createElement => JS-object  =>HTMLelement(render)
//This is a core way of react to create things but it is not easy as compare to normal html,so let's use JSX

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//JSX is a html-like syntax not a html and JSX , react are two different things.
//JSX(transpiled before it reaches to JS-engine)-Parcel(prime minister)-babel(home minister)(convert jsx into reactElement)
//JSX => Babel transpile it to  React.createElement => JS-object  =>HTMLelement(render)
// const jsxHeading = <h1 id="heading">Namaste React from JSX 🚀</h1>;
// root.render(jsxHeading);

//React component->eg. button,div,etc;
//functional based component: New
//class based component: old

//functional component->A javascript funtion which returns jsx or react Element
// const HeadingComponent = () => {
//   return <h1>Namaste React functional component 1st way</h1>;
// };

// const HeadingComponent2 = () => <h1>Hello 2nd way</h1>;

//() used for multiple lines jsx
// const HeadingComponent3 = () => (
//   <h1>Namaste React functional component 3rd way</h1>
// );
//react component should always be pass like this <react component/>
// root.render(<HeadingComponent3/>);

//component composition: Using nested components
// () used for multiple lines jsx
// const HeadingComponent4 = () => (
//   <div id="container">
//     <HeadingComponent />
//     <HeadingComponent2></HeadingComponent2>
//     {/* {any javascript code can be used between these two curly braces} */}
//     {1000 + 5}
//     {HeadingComponent3()}
//     <h1>Composition Component</h1>
//   </div>
// );

// root.render(<HeadingComponent4 />);

// Food App
import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
