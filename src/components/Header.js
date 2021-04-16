import React from 'react';

const Header = (props) => (
    <div className="header">
        <h1 className="header__title">{props.titulo}</h1>
        <h2 className="header__subtitle">{props.subtitulo}</h2>
    </div>
)

Header.defaultProps = {
    titulo: "Teste"
}

export default Header;