"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.adiciona = _this.adiciona.bind(_this);
        _this.remove = _this.remove.bind(_this);
        _this.reseta = _this.reseta.bind(_this);
        _this.state = {
            count: props.count
        };
        return _this;
    }

    _createClass(Counter, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                var stringNumero = localStorage.getItem("numero");
                var numero = parseInt(stringNumero, 10);

                if (!isNaN(numero)) {
                    //se o isNaN retornar false (isto é, se for um NUMBER)
                    this.setState(function () {
                        return {
                            count: numero
                        };
                    });
                }
            } catch (e) {}
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                localStorage.setItem("numero", this.state.count);
            }
        }
    }, {
        key: "adiciona",
        value: function adiciona() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: "remove",
        value: function remove() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: "reseta",
        value: function reseta() {
            var _this2 = this;

            this.setState(function () {
                return {
                    count: _this2.props.count
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Contador: ",
                    this.state.count
                ),
                React.createElement(
                    "button",
                    { onClick: this.adiciona },
                    "Adicionar"
                ),
                React.createElement(
                    "button",
                    { onClick: this.remove },
                    "Remover"
                ),
                React.createElement(
                    "button",
                    { onClick: this.reseta },
                    "Resetar"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(React.createElement(Counter, { count: 3 }), document.querySelector('#app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const removeOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.querySelector('#app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>Adiciona</button>
//             <button onClick={removeOne}>Remove</button>
//             <button onClick={reset}>Resetar</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();
