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

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                titulo = _props.titulo,
                subtitulo = _props.subtitulo;


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
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    {
                        onClick: this.props.pegaOpcao,
                        disabled: !this.props.temOpcoes
                    },
                    "O que eu fa\xE7o?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            var opcoes = [].concat(_toConsumableArray(this.props.opcoes));

            return React.createElement(
                "div",
                null,
                opcoes.map(function (item) {
                    return React.createElement(Option, { key: item, texto: item });
                }),
                React.createElement(
                    "button",
                    { onClick: this.props.removerTudo },
                    "Remover todos!"
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            var texto = this.props.texto;


            return React.createElement(
                "div",
                null,
                "Op\xE7\xE3o: ",
                texto
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.adicionaOpcao = _this6.adicionaOpcao.bind(_this6);
        _this6.state = {
            erro: undefined
        };
        return _this6;
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
