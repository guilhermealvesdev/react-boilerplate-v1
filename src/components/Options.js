import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        {props.opcoes.length === 0 && <p>Ainda sem opções!</p>}
        {
            props.opcoes.map((item) => (
                <Option key={item} texto={item} removeOpcao={props.removeOpcao} />
            ))
        }
        <button className="button button--link" onClick={props.removerTudo}>Remover todos!</button>
    </div>
)

export default Options;