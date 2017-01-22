//http://www.w3schools.com/jsref/met_document_createelement.asp
function adicionaBotao() {
    var btn = document.createElement("BUTTON");
    console.log(btn);
    document.body.appendChild(btn);
}

function adicionaBotaoComTexto() {
    var btn = document.createElement("BUTTON");
    console.log(btn);
    var t = document.createTextNode("CLICK ME");
    console.log(t);
    btn.appendChild(t);
    document.body.appendChild(btn);
}

function criarNoParagrafo() {
    var para = document.createElement("p");
    console.log(para);
    var t = document.createTextNode("This is a paragraph.");
    console.log(t);
    para.appendChild(t);
    document.body.appendChild(para);
}

function textoAdicionadoNoDiv() {
    var para = document.createElement("P");
    para.setAttribute("style", "color:red");
    console.log(para);
    var t = document.createTextNode("This is a paragraph.");
    console.log(t);
    para.appendChild(t);
    document.getElementById("myDIV").appendChild(para);
}