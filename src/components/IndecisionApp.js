import React from 'react';

import AddOption from './AddOption'
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removerTudo = this.removerTudo.bind(this);
        this.pegaOpcao = this.pegaOpcao.bind(this);
        this.adicionaOpcao = this.adicionaOpcao.bind(this);
        this.removeOpcao = this.removeOpcao.bind(this);

        this.state = {
            opcoes : []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('opcoes');
            const opcoes = JSON.parse(json);

            if (opcoes) { // Se houver opções...
                this.setState(() => {
                    return {
                        opcoes: opcoes
                    }
                });
            }
        } catch (e) {
            //Não fazer nada, deixar o React buscar os props padrões
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.opcoes.length !== this.state.opcoes.length) {
            const json = JSON.stringify(this.state.opcoes);
            localStorage.setItem('opcoes', json);
        }
    }
    pegaOpcao() {
        const randomNumber = Math.floor(Math.random() * this.state.opcoes.length);
        console.log(this.state.opcoes[randomNumber]);
    }
    removerTudo() {
        this.setState(() => ({opcoes:[]}))
    }
    removeOpcao(opcao) {        
        this.setState((prevState) => ({
            opcoes: prevState.opcoes.filter((item) => opcao !== item) //Filtra pra ver se algum dos itens da array é igual ao item passado.
        }));
    }
    adicionaOpcao(opcao) {
        if(!opcao) { // Se o valor não for uma string vazia...
            return "Coloque um valor certo";
        } else if (this.state.opcoes.indexOf(opcao) > -1) { // Se o valor já existe...
            return "Essa opção já existe."
        }

        this.setState((prevState) => ({opcoes: [...prevState.opcoes, opcao]}))
    }
    render() {
        const subtitulo = "Coloque sua vida nas mãos de um computador."

        return (
            <div>
                <Header subtitulo={subtitulo} />
                <Action
                    pegaOpcao = {this.pegaOpcao}
                    temOpcoes={this.state.opcoes.length > 0}
                />
                <Options
                    removerTudo={this.removerTudo}
                    opcoes={this.state.opcoes}
                    removeOpcao={this.removeOpcao}
                />
                <AddOption adicionaOpcao={this.adicionaOpcao} />
            </div>
        )
    }
}