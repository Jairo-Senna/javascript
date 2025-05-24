function calcularMedia(notas) {
  const notasOrdenadas = notas.sort((a, b) => b - a);
  const tresMelhores = notasOrdenadas.slice(0, 3);
  const soma = tresMelhores.reduce((total, nota) => total + nota, 0);
  const media = soma / tresMelhores.length;
  return media;
}

const notas = [5, 8, 9, 3, 10, 7];

let mediaTresMelhores = calcularMedia(notas);

console.log("Média das 3 melhores notas:", mediaTresMelhores);
