class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.adiciona = this.adiciona.bind(this);
        this.remove = this.remove.bind(this);
        this.reseta = this.reseta.bind(this);
        this.state = {
            count: props.count
        };
    }
    componentDidMount() {
        try {
            console.log('aaaaaaaaaa');
            const stringNumero = localStorage.getItem("numero");
            const numero = parseInt(stringNumero, 10);

            if (!isNaN(numero)) { //se o isNaN retornar false (isto é, se for um NUMBER)
                this.setState(() => {
                    return {
                        count: numero
                    }
                })
            }
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem("numero", this.state.count);
        }
    }
    adiciona() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    remove() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    reseta() {
        this.setState(() => {
            return {
                count: this.props.count
            }
        })
    }
    render() {
        return(
            <div>
                <h1>Contador: {this.state.count}</h1>
                <button onClick={this.adiciona}>Adicionar</button>
                <button onClick={this.remove}>Remover</button>
                <button onClick={this.reseta}>Resetar</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={3} />, document.querySelector('#app'));




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