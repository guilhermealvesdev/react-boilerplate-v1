class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removerTudo = this.removerTudo.bind(this);
        this.pegaOpcao = this.pegaOpcao.bind(this);
        this.adicionaOpcao = this.adicionaOpcao.bind(this);

        this.state = {
            opcoes : []
        }
    }
    pegaOpcao() {
        const randomNumber = Math.floor(Math.random() * this.state.opcoes.length);
        console.log(this.state.opcoes[randomNumber]);
    }
    removerTudo() {
        this.setState(() => {
            return {
                opcoes: []
            };
        });
    }
    adicionaOpcao(opcao) {
        if(!opcao) { // Se o valor não for uma string vazia...
            return "Coloque um valor certo";
        } else if (this.state.opcoes.indexOf(opcao) > -1) { // Se o valor já existe...
            return "Essa opção já existe."
        }

        this.setState((prevState) => {
            return {
                opcoes: [...prevState.opcoes, opcao]
            }
        })
    }
    render() {
        const titulo = "App de indecisão";
        const subtitulo = "Coloque sua vida nas mãos de um computador."

        return (
            <div>
                <Header titulo={titulo} subtitulo={subtitulo} />
                <Action
                    pegaOpcao = {this.pegaOpcao}
                    temOpcoes={this.state.opcoes.length > 0}
                />
                <Options
                    removerTudo={this.removerTudo}
                    opcoes={this.state.opcoes}
                />
                <AddOption adicionaOpcao={this.adicionaOpcao} />
            </div>
        )
    }
}

const Header = (props) => {
    const {titulo, subtitulo} = props;

    return (
        <div>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.pegaOpcao}
                disabled={!props.temOpcoes}
            >
            O que eu faço?
            </button>
        </div>
    )
}

const Options = (props) => {
    const opcoes = [...props.opcoes];

    return(
        <div>
            {
                opcoes.map((item) => <Option key={item} texto={item} /> )
            }
            <button onClick={props.removerTudo}>Remover todos!</button>
        </div>
    )
}

const Option = (props) => {
    const {texto} = props;

    return (
        <div>
            Opção: {texto}
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.adicionaOpcao = this.adicionaOpcao.bind(this);
        this.state = {
            erro: undefined
        }
    }
    adicionaOpcao(e) {
        e.preventDefault();
        
        const value = e.target.elements.inputOpcao.value.trim();

        const erro = this.props.adicionaOpcao(value);

        this.setState(() => {
            return {
                erro: erro
            }
        })

        e.target.elements.inputOpcao.value = "";
    }

    render() {
        return (
            <div>
                {this.state.erro && <p>{this.state.erro}</p>}
                <form onSubmit={this.adicionaOpcao}>
                    <input type="text" name="inputOpcao" /><br />
                    <button>Adicionar opção</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));