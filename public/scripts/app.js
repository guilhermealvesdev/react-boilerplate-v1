"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.removerTudo = _this.removerTudo.bind(_this);
        _this.pegaOpcao = _this.pegaOpcao.bind(_this);
        _this.adicionaOpcao = _this.adicionaOpcao.bind(_this);

        _this.state = {
            opcoes: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "pegaOpcao",
        value: function pegaOpcao() {
            var randomNumber = Math.floor(Math.random() * this.state.opcoes.length);
            console.log(this.state.opcoes[randomNumber]);
        }
    }, {
        key: "removerTudo",
        value: function removerTudo() {
            this.setState(function () {
                return {
                    opcoes: []
                };
            });
        }
    }, {
        key: "adicionaOpcao",
        value: function adicionaOpcao(opcao) {
            if (!opcao) {
                // Se o valor não for uma string vazia...
                return "Coloque um valor certo";
            } else if (this.state.opcoes.indexOf(opcao) > -1) {
                // Se o valor já existe...
                return "Essa opção já existe.";
            }

            this.setState(function (prevState) {
                return {
                    opcoes: [].concat(_toConsumableArray(prevState.opcoes), [opcao])
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var titulo = "App de indecisão";
            var subtitulo = "Coloque sua vida nas mãos de um computador.";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { titulo: titulo, subtitulo: subtitulo }),
                React.createElement(Action, {
                    pegaOpcao: this.pegaOpcao,
                    temOpcoes: this.state.opcoes.length > 0
                }),
                React.createElement(Options, {
                    removerTudo: this.removerTudo,
                    opcoes: this.state.opcoes
                }),
                React.createElement(AddOption, { adicionaOpcao: this.adicionaOpcao })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    var titulo = props.titulo,
        subtitulo = props.subtitulo;


    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            titulo
        ),
        React.createElement(
            "h2",
            null,
            subtitulo
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                onClick: props.pegaOpcao,
                disabled: !props.temOpcoes
            },
            "O que eu fa\xE7o?"
        )
    );
};

var Options = function Options(props) {
    var opcoes = [].concat(_toConsumableArray(props.opcoes));

    return React.createElement(
        "div",
        null,
        opcoes.map(function (item) {
            return React.createElement(Option, { key: item, texto: item });
        }),
        React.createElement(
            "button",
            { onClick: props.removerTudo },
            "Remover todos!"
        )
    );
};

var Option = function Option(props) {
    var texto = props.texto;


    return React.createElement(
        "div",
        null,
        "Op\xE7\xE3o: ",
        texto
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.adicionaOpcao = _this2.adicionaOpcao.bind(_this2);
        _this2.state = {
            erro: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "adicionaOpcao",
        value: function adicionaOpcao(e) {
            e.preventDefault();

            var value = e.target.elements.inputOpcao.value.trim();

            var erro = this.props.adicionaOpcao(value);

            this.setState(function () {
                return {
                    erro: erro
                };
            });

            e.target.elements.inputOpcao.value = "";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.erro && React.createElement(
                    "p",
                    null,
                    this.state.erro
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.adicionaOpcao },
                    React.createElement("input", { type: "text", name: "inputOpcao" }),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        null,
                        "Adicionar op\xE7\xE3o"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
