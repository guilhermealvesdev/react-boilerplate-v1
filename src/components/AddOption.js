import React from 'react';

export default class AddOption extends React.Component {
    state = {
        erro: undefined
    }

    adicionaOpcao = (e) => {
        e.preventDefault();
        
        const value = e.target.elements.inputOpcao.value.trim();

        const erro = this.props.adicionaOpcao(value);

        this.setState(() => ({erro: erro}));

        if(!erro) {
            e.target.elements.inputOpcao.value = "";
        }
    }

    render() {
        return (
            <div>
                {this.state.erro && <p>{this.state.erro}</p>}
                <form onSubmit={this.adicionaOpcao}>
                    <input type="text" name="inputOpcao" /><br />
                    <button className="button">Adicionar opção</button>
                </form>
            </div>
        )
    }
}