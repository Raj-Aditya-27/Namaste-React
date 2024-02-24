// createElement takes 3 argument(element name,attributes,text)
const heading = React.createElement('h1', {id:"heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);