function mostrar() {
    var divPai = document.getElementById("div1");
    var paragrafo = document.createElement("p");
    var texto = document.createTextNode("Olá");
    paragrafo.appendChild(texto);
    divPai.appendChild(paragrafo);
}

function mostrarDiv() {
    var list = document.getElementById("div1").childNodes;
    console.log(list);
    var num = list.length;
    console.log(num);
}

//http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_insertbefore
function serOPrimeiro() {
    var divPai = document.getElementById("div1");
    var novoParagrafo = document.createElement("p");
    var novoTexto = document.createTextNode("Mundo");
    novoParagrafo.appendChild(novoTexto);

//divPai.firstChild
    divPai.insertBefore(novoParagrafo, divPai.childNodes[0]);
}

function antes() {
    var b = document.getElementById("c").previousElementSibling;

    document.getElementById("result").innerHTML += b.innerHTML;
}

//https://msdn.microsoft.com/en-us/library/ms534189(v=vs.85).aspx
function GetNextNode() {
    // Get the text content of the list item labeled 'List Item 2':
    var textNode = document.getElementById('firstListItem').nextSibling;
    console.log(textNode.nextSibling.textContent);
}

function removerNo() {
    var textNode = document.getElementById('menu');
    console.log(textNode);
    var filho = textNode.childNodes[3];
    console.log(filho);
    textNode.removeChild(filho);
}