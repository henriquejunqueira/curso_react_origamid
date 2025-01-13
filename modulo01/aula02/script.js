// ? import
// import { areaQuadrado, perimetroQuadrado } from './quadrado.js';
// import quadrado from './quadrado.js';
// import numeroAleatorio from './numeroAleatorio.js';

// console.log(areaQuadrado(5));
// console.log(perimetroQuadrado(5));
// console.log(numeroAleatorio);
// console.log(quadrado.perimetroQuadrado(5));

// ? fetch

// fetch('https://ranekapi.origamid.dev/json/api/produto')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });

// ? async await
// async function fetchProdutos(url) {
//   const response = await fetch(url);
//   const json = await response.json();
// console.log(response);
// console.log(json);
// return response;
//   return json;
// }

// const produtos = fetchProdutos(
//   'https://ranekapi.origamid.dev/json/api/produto'
// );

// console.log(produtos);

// ? filter e map

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

// ! filter (filtra o conteúdo de uma array)
// const precosFiltro = precos.filter(function (preco) {
// console.log(preco);
// console.log(preco.includes('R$'));
// return true; // filtra por resultados true
//   return preco.includes('R$'); // includes retorna resultados que contém algo especificado
// });

// ! Filter simplificado
// const precosFiltro = precos.filter((preco) => preco.includes('R$'));

// ! Filter mais simplificado ainda
const precosFiltro = precos.filter((p) => p.includes('R$'));
// console.log(precosFiltro);

// ! map (percorre um array e obtem uma representação específica para cada item nele contido)
// const precosNumeros = precosFiltro.map((preco) => 'teste');
// const precosNumeros = precosFiltro.map((preco) => preco.replace('R$', ' '));
// const precosNumeros = precosFiltro.map((preco) => preco.replace('R$ ', ''));
const precosNumeros = precosFiltro.map((preco) =>
  Number(preco.replace('R$ ', ''))
);

// console.log(precosNumeros);
console.log(precos);
