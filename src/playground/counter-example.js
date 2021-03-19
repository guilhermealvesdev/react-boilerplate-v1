class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.adiciona = this.adiciona.bind(this);
        this.remove = this.remove.bind(this);
        this.reseta = this.reseta.bind(this);
        this.state = {
            count: 0
        };
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
                count: 0
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

ReactDOM.render(<Counter />, document.querySelector('#app'));




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