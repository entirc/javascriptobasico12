//http://www.w3schools.com/jsref/prop_node_attributes.asp
function myFunction() {
    var y = document.getElementById("myBtn");
    console.log(y);

    var x = document.getElementById("myBtn").attributes[1].name;
    document.getElementById("demo").innerHTML = x;

    var z = typeof x;
    console.log(z);
}

//https://developer.mozilla.org/pt-BR/docs/Web/API/Element/attributes
function listAttributes() {
    var paragraph = document.getElementById("paragraph");
    var result = document.getElementById("result");

//isso aqui cai no else do if
    var paragraph1 = document.getElementsByTagName("hr")[0];
    console.log(paragraph1);

    // Antes, vamos verificar se o paragrafo tem algum atributo
    if (paragraph.hasAttributes()) {
        var attrs = paragraph.attributes;
        var output = "";
        for (var i = attrs.length - 1; i >= 0; i--) {
            output += attrs[i].name + "->" + attrs[i].value;
        }
        result.value = output;
    } else {
        result.value = "Nenhum atributo para mostrar";
    }
}
//https://www.google.com.br/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=dom%20attributes
//http://www.javascriptkit.com/dhtmltutors/domattribute.shtml
function capturarAtributo() {
    var getvalue = document.getElementById("myimage").getAttribute("src");
    console.log(getvalue);
}

//http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1
function setAtributo() {
//    var z = document.getElementsByTagName("H1")[0];
//    console.log(z);
    document.getElementsByTagName("H1")[0].setAttribute("style", "color:red");
    var x = document.getElementsByTagName("H1")[0];
    console.log(x);
}


