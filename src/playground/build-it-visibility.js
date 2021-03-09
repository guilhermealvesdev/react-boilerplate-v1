let conteudoAparecendo = true;

const mostraDetalhes = () => {
    conteudoAparecendo = !conteudoAparecendo;
    renderApp();
}

function renderApp() {
    const conteudo = (
        <div>
            <h1>Detalhes</h1>
    
            <button onClick={mostraDetalhes}>{conteudoAparecendo ? "Some detalhes" : "Mostra detalhes"}</button>
    
            {conteudoAparecendo && <p>Teste de detalhes...</p>}
        </div>
    );

    const appRoot = document.querySelector("#app");

    ReactDOM.render(conteudo, appRoot)
}

renderApp();