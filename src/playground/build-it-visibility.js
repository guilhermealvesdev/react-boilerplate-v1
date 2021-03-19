class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.mostraDetalhes = this.mostraDetalhes.bind(this);
        this.state = {
            conteudoAparecendo: false
        };
    }
    mostraDetalhes() {
        this.setState((prevState) => {
            return {
                conteudoAparecendo: !prevState.conteudoAparecendo
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Detalhes</h1>
                <button onClick={this.mostraDetalhes}>{this.state.conteudoAparecendo ? "Some detalhes" : "Mostra detalhes"}</button>
                {this.state.conteudoAparecendo && <p>Teste de detalhes...</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.querySelector('#app'));