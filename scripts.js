const { getCityFromZipcode } = require('utils-playground');

// //Código síncrono 
// console.log('Início');

// for (let index = 1; index <= 5; index++) {
//     console.log(index);
// }

// console.log('Fim');

// //Código assíncrono 
// console.log('Início');

// getCityFromZipcode('41256250').then(cidade => {
//     console.log(cidade);
// });

// console.log('Fim');

const cidade = getCityFromZipcode('41256250');
console.log(cidade);
