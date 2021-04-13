import React from 'react';

const Option = (props) => (
    <div>
        Opção: {props.texto}
        <button onClick={
            (e) => {
                removeOpcao(props.texto);
            }
        }>Remover</button>
    </div>
)

export default Option;