// createElement takes 3 argument(tag name,attributes like id,[child])
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 * Create nested div
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello,I'm H1 tag.</h1>
 *          <h2>Hello,I'm H2 tag.</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello,I'm H1 tag."),
    React.createElement("h2", {}, "Hello,I'm H2 tag."),
  ])
);

root.render(parent);
