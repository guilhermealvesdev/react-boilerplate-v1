import React from 'react';

const Option = (props) => (
    <div>
        Opção: {props.texto}
        <button className="button button--link" onClick={
            (e) => {
                props.removeOpcao(props.texto);
            }
        }>Remover</button>
    </div>
)

export default Option;