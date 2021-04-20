import React from 'react';

const Action = (props) => (
    <div>
        <button
            className="button big-button"
            onClick={props.pegaOpcao}
            disabled={!props.temOpcoes}
        >
        O que eu faço?
        </button>
    </div>
)

export default Action;