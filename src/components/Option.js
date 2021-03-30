import React from 'react';

const Option = (props) => {
    const {texto, removeOpcao} = props;

    return (
        <div>
            Opção: {texto}
            <button onClick={
                (e) => {
                  removeOpcao(texto);
                }
            }>Remover</button>
        </div>
    )
}

export default Option;