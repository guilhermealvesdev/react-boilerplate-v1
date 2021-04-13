import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.titulo}</h1>
        <h2>{props.subtitulo}</h2>
    </div>
)

Header.defaultProps = {
    titulo: "Teste"
}

export default Header;