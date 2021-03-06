const app = {
    titulo: "Teste",
    subtitulo: "Olá",
    opcoes: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.inputOpcao.value;
    
    if (option) {
        app.opcoes.push(option);
        e.target.elements.inputOpcao.value = "";
        renderApp();
        console.log(app.opcoes.length);
    }
}

const removerTodos = () => {
    app.opcoes = [];
    renderApp();
}

function renderApp() {
    const template = (
        <div>
            <h1>{app.titulo}</h1>
            {app.subtitulo && <p>{app.subtitulo}</p>}
            <p>{app.opcoes.length > 0 ? "Aqui estão suas opções:" : "Não há opções"}</p>
            <p>{app.opcoes.length}</p>

            <button onClick={removerTodos}>Remover todos</button>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="Input" name="inputOpcao" />
                <button>Adicionar</button>
            </form>
        </div>
    );

    const appRoot = document.querySelector("#app");

    ReactDOM.render(template, appRoot)
}

renderApp();