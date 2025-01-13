// const menu = {
//   seletor: '.principal',
// };

// console.log(menu.seletor.toUpperCase()); // retorna tudo em letra maiúscula

// ? Funções

// ! Função
// function upperName(name) {
//   return name.toUpperCase();
// }

// ! Função Seta (arrow function)
// const lowerName = () => {

// }

// ! Função Anônima
// const upperName = function (name) {
//   return name.toUpperCase();
// };

// ! Função Seta (arrow function)
// const upperName = (name) => {
//   return name.toUpperCase();
// };

// ! Função Seta (arrow function) simplificada
// const upperName = (name) => name.toUpperCase();

// console.log(upperName('andré'));

// ? Eventos

// function handleMouse(event) {
// console.log(event);
// console.log(event.clientX);

//   const x = event.clientX;
//   const y = event.clientY;
//   console.log(x, y);

// ! Desestruturação
//   const { clientX, clientY } = event;
//   console.log(clientX, clientY);
// }

// ! Desestruturando diretamente nos parâmetros da função
// function handleMouse({ clientX, clientY }) {
//   console.log(clientX, clientY);
// }

// ! Desestruturando arrays
// const frutas = ['banana', 'uva'];
// const [fruta1, fruta2] = frutas;
// console.log(fruta1);

// ! Desestruturando array utilizando função
// const useQuadrado = [
//   4,
//   function (lado) {
//     return 4 * lado;
//   },
// ];

// const [lados, perimetro] = useQuadrado;
// console.log(lados);
// console.log(perimetro(10));

// document.addEventListener('click', handleMouse);

// ? Rest Operator (permite que uma função receba um número indefinido de parâmetros)

// ! Sem rest operator
// function showList(empresa, clientes) {
//   clientes.forEach((cliente) => {
//     console.log(cliente, empresa);
//   });
// }

// showList('Google', ['André', 'Rafael']);

// ! Utilizando rest operator
// function showList(empresa, ...clientes) {
//   clientes.forEach((cliente) => {
//     console.log(cliente, empresa);
//   });
// }

// showList('Google', 'André', 'Rafael', 'Henrique', 'João');

// ? Spread Operator (spread permite definir um número indefinido de parâmetros)

// const maior = Math.max(10, 5, 20);
// console.log(maior);

// const numeros = [10, 5, 20];
// const maior = Math.max(...numeros);
// console.log(maior);

// ! Calculando arrays juntos com spread
// const numeros = [10, 5, 20];
// const maior = Math.max(...numeros);
// console.log(maior);

// const numeros2 = [...numeros, 24, 32, 32];
// const numeros2 = [13, ...numeros, 24, 32, 32]; // [13, 10, 5, 20, 24, 32, 32]
// console.log(numeros2);

// ! Modificando objeto
const carro = {
  cor: 'Azul',
  portas: 4,
};

// carro.ano = 2020;
carroAno = { ...carro, ano: 2008 }; // ! melhor forma (não modifica o objeto original)

console.log(carroAno);
