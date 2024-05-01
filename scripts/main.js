let D = [], flag = false;

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
    for(let i = 1; i <= 4; i++) des(`p${i}`);
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
    if(!aux[0] || !aux[1]) return;
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

//Operacion 2
document.querySelector("#pp2").onclick = function(){
    document.getElementById("form2").addEventListener("submit", opp2);
}
function opp2(event) {
	event.preventDefault();
	const data = new FormData(event.target);
    let aux = [];
	data.forEach((value, key) => {aux.push(value);});
    if(!aux[0] || !aux[1]) return;
    let num1 = parseInt(aux[0],10);
    let num2 = parseInt(aux[1],10);
    if(num1 > 1e9 || num2 > 1e9){
        document.getElementById("p2b1").textContent = `La respuesta es demasiado grande.`;
    }
    else{
        let num3 = Euclides(num1, num2);
        document.getElementById("p2b1").textContent = `La respuesta es: ${num3}.`;
    }
}

//Operacion 3
document.querySelector("#pp3").onclick = function(){
    document.getElementById("form3").addEventListener("submit", opp3);
}
function opp3(event) {
	event.preventDefault();
	const data = new FormData(event.target);
    let aux = [];
	data.forEach((value, key) => {aux.push(value);});
    if(!aux[0]) return;
    let num1 = parseInt(aux[0],10);
    if(num1 > 1e9){
        document.getElementById("p3b1").textContent = `La respuesta es demasiado grande.`;
    }
    else{
        if(TestP(num1) == true){
            document.getElementById("p3b1").textContent = "El número es primo";
        }
        else{
            document.getElementById("p3b1").textContent = "El número no es primo";
        }
    }
}

//Operacion 4
document.querySelector("#pp4").onclick = function(){
    document.getElementById("form4").addEventListener("submit", opp4);
}
function opp4(event) {
    if(flag == false){ Criba(); flag = true;}
	event.preventDefault();
	const data = new FormData(event.target);
    let aux = [];
	data.forEach((value, key) => {aux.push(value);});
    if(!aux[0]) return;
    let num1 = parseInt(aux[0],10);
    if(num1 > 1e7){
        document.getElementById("p4b1").textContent = `La respuesta es demasiado grande.`;
    }
    else{
        if(num1<2){
            document.getElementById("p4b1").textContent = "No existen primos menores que él";
        }
        else{
            let i = num1;
            while(D[i] == 1) i--;
            document.getElementById("p4b1").textContent = `El número primo más cercano es ${i}`;
        }
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
function TestP(a){
    let sq = Math.sqrt(a);
    for(let i = 2; i <= sq; i++){
        if(a%i == 0) return false;
    }
    return true;
}
function Criba(){
    for(let i = 0; i <= 1e7; i++) D.push(0);
    for(let i = 2; i <= 1e7; i++){
        if(D[i] == 0){
            for(let j = i*i; j <= 1e7; j+=i){
                D[j] = 1;
            }
        }
    }
}
function des(a){
    document.getElementById(a).style.display = "none";
}



