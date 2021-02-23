console.log("Teste!");

const objeto = {
    title: "Teste",
    subtitle: "Teste 2"
}

const template = (
    <div>
        <h1>{objeto.title}</h1>
        <p>{objeto.subtitle}</p>
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