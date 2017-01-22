//http://www.w3schools.com/jsref/prop_node_nodetype.asp
function ver() {
    var parentNode = document.getElementById("div3");
    console.log(parentNode);
    var teste = document.getElementById("div3").childNodes;
    console.log(teste);
    var targetNode = parentNode.childNodes[2];
    console.log(targetNode);
    var nType = targetNode.nodeType;
    console.log(nType);
}

function qualOTipo() {
    var no = document.getElementById("divPai");
    var targetNode = no.childNodes[0];
    console.log(targetNode);
    var nType = targetNode.nodeType;
    console.log(nType);
    if (nType == Node.TEXT_NODE) {
        console.log("sou do tipo texto");
    }
}

function qualONome() {
    var no = document.getElementById("divPai1");
    // var targetNode = no.firstChild;
    var targetNode = no.childNodes[3];
    console.log(targetNode);
    var noNome = targetNode.nodeName;
    console.log(noNome);


    if (noNome.toLowerCase() == 'form') {
        console.log("sou um formulário");
    }
    if (noNome == 'BUTTON') {
        targetNode.style.color = "#ff0000";
    }
}

//http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_nodevalue
//http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_childnodes3

function valorDoTexto() {
    // var c = document.getElementsByTagName("BUTTON")[2];
    var c = document.getElementsByTagName("SELECT")[0];
    console.log(c);
    //var x =c.childNodes[0].nodeValue;
    var x = c.childNodes[3].childNodes[0].nodeValue;
    var y = c.childNodes[3].childNodes[0];


    var tipo = typeof x;
    var tipo1 = typeof y;
    console.log(x);
    console.log("tipo: " + tipo);
    console.log(y);
    console.log("tipo1: " + tipo1);
    console.dir(y);
}
//console.table
//https://developer.mozilla.org/en/docs/Web/API/Node/nodeType