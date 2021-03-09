"use strict";

var conteudoAparecendo = true;

var mostraDetalhes = function mostraDetalhes() {
    conteudoAparecendo = !conteudoAparecendo;
    renderApp();
};

function renderApp() {
    var conteudo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Detalhes"
        ),
        React.createElement(
            "button",
            { onClick: mostraDetalhes },
            conteudoAparecendo ? "Some detalhes" : "Mostra detalhes"
        ),
        conteudoAparecendo && React.createElement(
            "p",
            null,
            "Teste de detalhes..."
        )
    );

    var appRoot = document.querySelector("#app");

    ReactDOM.render(conteudo, appRoot);
}

renderApp();
