import React from 'react';
import Option from './Option';

const Options = (props) => {
    const opcoes = [...props.opcoes];

    return(
        <div>
            {props.opcoes.length === 0 && <p>Ainda sem opções!</p>}
            {
                opcoes.map((item) => (
                    <Option key={item} texto={item} removeOpcao={props.removeOpcao} />
                ))
            }
            <button onClick={props.removerTudo}>Remover todos!</button>
        </div>
    )
}

export default Options;