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
import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => object  =>HTMLelement(render)
//This is a core way of react to create things but it is not easy as compare to normal html,so let's use JSX

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//JSX is a html-like syntax not a html and JSX , react are two different things.
const jsxHeading = <h1 id="heading">Namaste React from JSX 🚀</h1>
root.render(jsxHeading);