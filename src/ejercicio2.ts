import * as readline from 'readline';

class CuentaBancaria {
    NumeroCuenta: number;
    titular: string;
    saldo: number;

    constructor(NumeroCuenta: number, titular: string, saldoInicial: number) {
        this.NumeroCuenta = NumeroCuenta;
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    /* Métodos */
    depositar(deposito: number) {
        if (deposito > 0) {
            this.saldo += deposito;
            console.log(`Se han depositado ${deposito}. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("Error: Por favor, ingrese una cantidad superior a cero.");
        }
    }

    retirar(retiro: number) {
        if (retiro > 0 && retiro <= this.saldo) {
            this.saldo -= retiro;
            console.log(`Se han retirado ${retiro}. Su saldo actual es de: ${this.saldo}`);
        } else {
            console.log("El saldo ingresado es insuficiente o inválido. Intente nuevamente.");
        }
    }

    consultarSaldo() {
        console.log(`Su saldo actual es de ${this.saldo}`);
    }
}

// Interfaz para datos en consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ingreseCuenta() {
    rl.question('Ingrese el número de cuenta: ', (numeroCuenta) => {
        rl.question('Ingrese el nombre del titular de la cuenta: ', (titular) => {
            const saldoInicial = 200000; // Sin punto decimal
            const cuenta = new CuentaBancaria(Number(numeroCuenta), titular, saldoInicial); // Convertir a número
            console.log(`Su cuenta es: ${cuenta.NumeroCuenta}`);

            // Aquí puedes agregar métodos para probar (opcional)
            cuenta.consultarSaldo(); // Por ejemplo, mostrar saldo inicial
            rl.close(); // Cerrar la interfaz
        });
    });
}

// Llamar a la función
ingreseCuenta();