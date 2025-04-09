import promptSync from 'prompt-sync';
const prompt = promptSync();

const num1 = Number(prompt("Ingrese un número  : "))
const num2 = Number(prompt("Ingrese un número  : "))
const num3 = Number(prompt("Ingrese un número  : "))

if (num1 === num2 && num2 === num3) {
    console.log("Los numeros son iguales")
} else {
    const numeros = [num1, num2, num3]

    const menorAmayor = [...numeros].sort((a, b) => a - b)
    const mayorAmenor = [...numeros].sort((a, b) => b - a)

    console.log("Numeros Ingresados : ", numeros.join(","))
    console.log("Mayor a menor : ", mayorAmenor.join(","))
    console.log("Menor a Mayor : ", menorAmayor.join(","))
}