
//todos os filhos de um elemento
function lista() {
    var list = document.getElementById("el").childNodes;
    console.log(list);
    var num = list.length;
    console.log(num);
    var numItens = document.getElementById("el").attributes.length;
    console.log(numItens);
    var nodeName = list[3].nodeName;
    console.log(nodeName);
}

//todos os atributos de um elemento
function lista1() {
    var list = document.getElementById("el1").attributes;
    console.log(list);
    var num = list.length;
    console.log(num);
}