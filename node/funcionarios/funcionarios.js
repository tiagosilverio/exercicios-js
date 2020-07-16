const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesas = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funci, funciAtual) => {
    return funci.salario < funciAtual.salario ? funci : funciAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    //get mulher chinesa com menor salario
    const funci = funcionarios
        .filter(chinesas)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(funci)
})