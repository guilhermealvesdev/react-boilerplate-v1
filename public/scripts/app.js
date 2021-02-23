"use strict";

console.log("Teste!");

var objeto = {
    title: "Teste",
    subtitle: "Teste 2"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        objeto.title
    ),
    React.createElement(
        "p",
        null,
        objeto.subtitle
    )
);

var username = "Teste";
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        username
    ),
    React.createElement(
        "p",
        null,
        "Idade: 30"
    ),
    React.createElement(
        "p",
        null,
        "Cidade: Santos"
    )
);

var appRoot = document.querySelector("#app");

ReactDOM.render(template, appRoot);
