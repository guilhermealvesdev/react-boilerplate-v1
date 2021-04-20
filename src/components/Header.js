import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.titulo}</h1>
            <h2 className="header__subtitle">{props.subtitulo}</h2>
        </div>
    </div>
)

Header.defaultProps = {
    titulo: "App de Indecisão"
}

export default Header;