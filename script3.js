//Testando problema em usar o then

const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');


// A função do estado será resolvida antes da cidade 

// getCityFromZipcode('41256250').then(cidade => {
//     console.log(cidade);
// }).catch((erro) => {
//     console.log(erro);
// });

// getStateFromZipcode('41256250').then(uf => {
//     console.log(uf);
// });



// Resolvendo a ordem das funções cidade e estado

getCityFromZipcode('41256250').then(cidade => {
    console.log(cidade);
    getStateFromZipcode('41256250').then(uf => {
        console.log(uf);
    });
}).catch((erro) => {
    console.log(erro);
});