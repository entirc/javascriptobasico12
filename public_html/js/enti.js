//https://tableless.com.br/imagens-em-alta-resolucao-utilizando-svg/
function mensagem() {
    alert('mensagem');
}

function qualEONome(nome) {
    var nome = document.getElementById(nome).value;
    alert(nome);
}

function qualEOEmail() {
    var email = document.getElementById('email').value;

    if (email === "") {
        alert("Coloque o email baraio!");
    } else {
        alert(email);
    }

}

function encontreACidade() {
    var cidade;
    var cep = document.getElementById('cep').value;

    switch (cep) {
        case "13506175":
            cidade = "Rio Claro";
            break;
        case "72006280":
            cidade = "Brasília";
            break;
        case "94075430":
            cidade = "Gravataí";
            break;
        default:
            cidade = "Cidade não encontrada.";
    }
    
    document.getElementById('cidade').value = cidade;

}