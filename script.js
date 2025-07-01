function inserirNome() {

    let nomeUsuario = prompt("Qual o seu nome");

    let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
    elemento.textContent = nomeUsuario;
}
inserirNome();
let linguagens = ["JavaScript","Python","C"];​
console.log(linguagens[0]) // “JavaScript”
console.log(linguagens[1]) // “Python”
console.log(linguagens[2]) // “C”
