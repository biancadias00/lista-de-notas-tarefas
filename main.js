let btn_add = document.getElementById('add');
let ul = document.getElementById('mat')
let li;
let itemId;
let item = document.getElementById("texto");
let cont = 1;

btn_add.addEventListener('click', (evt) => {
    evt.preventDefault();
    cont++;
    addTexto();
});

let lis = JSON.parse(localStorage.getItem('lis')) || [];

for(li of lis){
    ul.appendChild(createItemEl(li));
}

function addTexto(){
    if(document.getElementById("texto").value != ""){
    
        item = document.getElementById("texto");

        itemId = ul.childElementCount;

        li = createItemEl(item.value, itemId);
        ul.appendChild(li);
        lis.push(item.value);
        console.log(item.value);
        localStorage.setItem('lis', JSON.stringify(lis));
        item.value = "";
        
    }
}

function removeTexto( itemId){
    for(i = 0; i < ul.children.length; i++){
        if(ul.children[i].getAttribute("index") == itemId){
            ul.children[i].remove();
        }
    }
}

function createItemEl(itemValue, itemId){

    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));

    return li;
}

function limite_textarea(valor) {
    quant = 255;
    total = valor.length;

    if(total <= quant) {
        resto = quant - total;
        document.getElementById('cont').innerHTML = resto;
    } else {
        document.getElementById('texto').value = valor.substr(0,quant);
    }
}
