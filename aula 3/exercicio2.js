let idade = prompt("Qual a sua idade?");

idade = parseInt(idade);

if (idade >= 65) {
    console.log("Você é um idoso.");
} else if (idade >= 18) {
    console.log("Você é um adulto.");
} else if (idade >= 13) {
    console.log("Você é um adolescente.");
} else {
    console.log("Você é uma criança.");
}
