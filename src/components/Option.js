import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.texto}</p>
        <button className="button button--link" onClick={
            (e) => {
                props.removeOpcao(props.texto);
            }
        }>Remover</button>
    </div>
)

export default Option;