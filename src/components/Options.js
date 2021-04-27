import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Suas opções:</h3>
            <button className="button button--link" onClick={props.removerTudo}>Remover todos!</button>
        </div>
        {props.opcoes.length === 0 && <p className="widget__message">Ainda sem opções!</p>}
        {
            props.opcoes.map((item, index) => (
                <Option key={item} texto={item} count={index + 1} removeOpcao={props.removeOpcao} />
            ))
        }
    </div>
)

export default Options;