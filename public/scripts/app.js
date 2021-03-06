"use strict";

var app = {
    titulo: "Teste",
    subtitulo: "Olá",
    opcoes: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.inputOpcao.value;

    if (option) {
        app.opcoes.push(option);
        e.target.elements.inputOpcao.value = "";
        renderApp();
        console.log(app.opcoes.length);
    }
};

var removerTodos = function removerTodos() {
    app.opcoes = [];
    renderApp();
};

function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.titulo
        ),
        app.subtitulo && React.createElement(
            "p",
            null,
            app.subtitulo
        ),
        React.createElement(
            "p",
            null,
            app.opcoes.length > 0 ? "Aqui estão suas opções:" : "Não há opções"
        ),
        React.createElement(
            "p",
            null,
            app.opcoes.length
        ),
        React.createElement(
            "button",
            { onClick: removerTodos },
            "Remover todos"
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", placeholder: "Input", name: "inputOpcao" }),
            React.createElement(
                "button",
                null,
                "Adicionar"
            )
        )
    );

    var appRoot = document.querySelector("#app");

    ReactDOM.render(template, appRoot);
}

renderApp();
