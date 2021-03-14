class IndecisionApp extends React.Component {
    render() {
        const titulo = "App de indecisão";
        const subtitulo = "Coloque sua vida nas mãos de um computador."
        const opcoes = ['Opcao 1', 'Opcao 2', 'Opcao 3'];

        return (
            <div>
                <Header titulo={titulo} subtitulo={subtitulo} />
                <Action />
                <Options opcoes={opcoes} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        const {titulo, subtitulo} = this.props;

        return (
            <div>
                <h1>{titulo}</h1>
                <h2>{subtitulo}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    funcaoClique() {
        alert('Clique')
    }
    render() {
        return (
            <div>
                <button onClick={this.funcaoClique}>Botão</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removerTudo = this.removerTudo.bind(this);
    }
    removerTudo() {
        console.log(this.props.opcoes);
    }
    render() {
        const opcoes = [...this.props.opcoes];

        return(
            <div>
                {
                    opcoes.map((item) => <Option key={item} texto={item} /> )
                }
                <button onClick={this.removerTudo}>Remover todos!</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        const {texto} = this.props;

        return (
            <div>
                Opção: {texto}
            </div>
        )
    }
}

class AddOption extends React.Component {
    adicionaOpcao(e) {
        e.preventDefault();
        
        const value = e.target.elements.inputOpcao.value;

        if (value.trim()) {
            alert(value);
        }

        e.target.elements.inputOpcao.value = "";
    }
    render() {
        return (
            <div>
                <form onSubmit={this.adicionaOpcao}>
                    <input type="text" name="inputOpcao" /><br />
                    <button>Adicionar opção</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));