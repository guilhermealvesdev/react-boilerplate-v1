import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.pegaOpcao}
                disabled={!props.temOpcoes}
            >
            O que eu faço?
            </button>
        </div>
    )
}

export default Action;