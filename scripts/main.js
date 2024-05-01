//Base
document.getElementById("form0").addEventListener("submit", yo);
function yo(event){
    event.preventDefault();
	const data = new FormData(event.target);
    let aux;
	data.forEach((value, key) => {aux = value;});
    operacion(aux);
}
function operacion(a){
    for(let i = 1; i <= 1; i++) des(`p${i}`);
    document.getElementById(`p${a}`).style.display = "block";
}

//Operacion 1
document.querySelector("#pp1").onclick = function(){
    document.getElementById("form1").addEventListener("submit", opp1);
}
function opp1(event) {
	event.preventDefault();
	const data = new FormData(event.target);
    let aux = [];
	data.forEach((value, key) => {aux.push(value);});
    let num1 = parseInt(aux[0],10);
    let num2 = parseInt(aux[1],10);
    if(num1 > 1e9 || num2 > 1e9){
        document.getElementById("p1b1").textContent = `La respuesta es demasiado grande.`;
    }
    else{
        let num3 = Euclides(num1, num2);
        document.getElementById("p1b1").textContent = `La respuesta es: ${num1/num3*num2}.`;
    }
}


//Auxiliares
function Euclides(a, b){
    let aux;
    while(b > 0){
        aux = a%b;
        a = b;
        b = aux;
    }
    return a;
}
function des(a){
    document.getElementById(a).style.display = "none";
}



