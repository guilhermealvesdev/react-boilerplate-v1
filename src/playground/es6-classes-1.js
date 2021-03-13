class Person {
    constructor(nome = "Anonymous", idade = 0) {
        this.nome = nome;
        this.idade = idade;
    }
    shout() {
        return `Olá. Eu sou ${this.nome}.`;
    }
    descreve() {
        console.log(`${this.nome} tem ${this.idade} anos.`)
    }
}

class Student extends Person {
    constructor(nome = "Anônimo", idade = 0, faculdade = undefined) {
        super(nome, idade);
        this.faculdade = faculdade;
    }
    descreve() {
        console.log(`${this.nome} tem ${this.idade} anos, e estuda ${this.faculdade}`)
    }
    temDiploma() {
        console.log(!!this.faculdade);
    }
}

class Traveler extends Person {
    constructor(nome = "Anônimo", idade = 0, casa) {
        super(nome, idade);
        this.casa = casa;
    }
    shout() {
        let descricao = super.shout();

        if (this.casa) {
            descricao += ` Eu estou visitando de ${this.casa}.`
        }

        console.log(descricao);
    }
}

const guilherme = new Traveler('Guilherme', 30, 'Santos');
const mariana = new Traveler('Mariana', 25);

guilherme.shout();
mariana.shout();