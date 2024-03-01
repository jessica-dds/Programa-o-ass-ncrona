const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');

// getCityFromZipcode('41256250').then(cidade => {
//     console.log(cidade);
//     getStateFromZipcode('41256250').then(uf => {
//         console.log(uf);
//     });
// }).catch((erro) => {
//     console.log(erro);
// });


// palavra reservada async / await para trazer a cidade antes do estado


(async function () {
    const cidade = await getCityFromZipcode('41256250');
    console.log(cidade);

    const estado = await getStateFromZipcode('41256250');
    console.log(estado);
})();


// padrão função nomrmal 

// async function teste() {
//     return '123'
// }
// console.log(teste());


// padrão arrow function 

const teste = async () => {
    return '123'
}

console.log(teste());