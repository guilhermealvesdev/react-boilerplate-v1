const app = {
    titulo: "Teste",
    subtitulo: "Olá",
    opcoes: ["opcao1", "opcao2"]
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

const selecionar = () => {
    const randomNumber = Math.floor(Math.random() * app.opcoes.length);

    const options = app.opcoes[randomNumber];

    console.log(options);
}

function renderApp() {
    const template = (
        <div>
            <h1>{app.titulo}</h1>
            {app.subtitulo && <p>{app.subtitulo}</p>}
            <p>{app.opcoes.length > 0 ? "Aqui estão suas opções:" : "Não há opções"}</p>
            <p>{app.opcoes.length}</p>

            <ol>
                {
                    app.opcoes.map((item) => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ol>

            
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="Input" name="inputOpcao" />
                <button>Adicionar</button>
            </form>

            <button disabled={app.opcoes.length === 0} onClick={selecionar}>O que eu devo fazer?</button>

            <button onClick={removerTodos}>Remover todos</button>
        </div>
    );

    const appRoot = document.querySelector("#app");

    ReactDOM.render(template, appRoot)
}

renderApp();