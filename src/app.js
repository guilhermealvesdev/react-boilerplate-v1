console.log("Teste!");

const objeto = {
    title: "Teste",
    options: ["Um", "dois"]
}

const template = (
    <div>
        <h1>{objeto.title}</h1>
        {objeto.subtitle && <p>{objeto.subtitle}</p>}
        <p>{objeto.options.length > 0 ? "Aqui estão suas opções:" : "Não há opções"}</p>
    </div>
);

const username = "Teste";
const templateTwo = (
    <div>
        <h1>{username}</h1>
        <p>Idade: 30</p>
        <p>Cidade: Santos</p>
    </div>
);

const appRoot = document.querySelector("#app");

ReactDOM.render(template, appRoot)