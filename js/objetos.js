// 1-

// let auto  = {
//     color: "rojo",
//     modelo: "toyota",
//     marca: "no se de autos",
//     encendido: true,
// }


// function encenderApagar(){
//     auto.encendido = !auto.encendido;
// }

// 2-

class cuenta {
    constructor(titular, saldo){
        this.titular =  titular;
        this.saldo = 0;
    }
    ingresar (cantidad){
        this.saldo = this.saldo + cantidad;
    }
    extraer (cantidad) {
        this.saldo = this.saldo - cantidad;
    }
    informar(){
        console.log(`usted tiene ${this.saldo}`);
    }
}

let alex = new cuenta("Alex", 0)