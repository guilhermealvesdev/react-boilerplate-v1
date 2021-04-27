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
            <div className="add-option">
                {this.state.erro && <p className="add-option__error">{this.state.erro}</p>}
                <form onSubmit={this.adicionaOpcao}>
                    <div className="add-option__form">
                        <input className="add-option__input" type="text" name="inputOpcao" />
                        <button className="button">Adicionar opção</button>
                    </div>
                </form>
            </div>
        )
    }
}