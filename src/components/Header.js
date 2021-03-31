import React from 'react';

const Header = (props) => {
    const {titulo, subtitulo} = props;

    return (
        <div>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </div>
    );
}

Header.defaultProps = {
    titulo: "Teste"
}

export default Header;