"use strict";

console.log("Teste!");

var template = React.createElement(
  "p",
  null,
  "Mudando!"
);
var appRoot = document.querySelector("#app");

ReactDOM.render(template, appRoot);
