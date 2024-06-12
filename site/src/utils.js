import axios from "axios";

async function validateCNPJ(cpnj) {
    const response = await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cpnj}`);
    if(response.status === 200) {
        return true;
    } else {
        return false; 
    }
}

function cnpjMask(value) {
    return value
      .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
      .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura os dois últimos 2 números, com um - antes dos dois números
}

function removeCnpjMask(value) {
    return value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
}

export { validateCNPJ, cnpjMask, removeCnpjMask };