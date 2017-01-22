//http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname
function bebida() {
    var x = document.getElementsByTagName("li");
    console.log(x);
    var quantosElementos = x.length;
    console.log(quantosElementos);
    document.getElementById("qualBebida").innerHTML = x[2].innerHTML;

    for (var i = 0; i < quantosElementos; i++) {
        //console.log(x[i]);
        if (x[i].innerHTML == "Antarctica") {
            console.log("Aí sim.");
        }
    }
}

function bebida1() {
    var x = document.getElementById("menuBebidas");
    var nodeList = x.childNodes;
    console.log(nodeList);
    console.log("tamanho da lista " + nodeList.length);
    console.log(nodeList[1].nodeName);

    //Formato correto
    var y = document.querySelectorAll("#menuBebidas > li");
    console.log(y);

    //Procura tag menuBebidas no body
    var y2 = document.querySelectorAll("menuBebidas > li");
    console.log(y2);
}
