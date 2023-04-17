const emailList = ["simone@gmail.com", "giuseppe@libero.it", "francesco@imprigionato.it"];
const nDado = [1, 2, 3, 4, 5, 6];
document.querySelector(".user-out").innerHTML = nDado[Math.floor(Math.random() * nDado.length)];
document.querySelector(".pc-out").innerHTML = nDado[Math.floor(Math.random() * nDado.length)];
document.querySelector(".login").addEventListener("click", function () {
    const email = document.querySelector("#email").value;
    let valid = false;
    for (let i = 0; i < emailList.length; i++) {
        if (email == emailList[i]) {
            valid = true;
        }
    }
    if (valid) {
        alert("Email presente nella lista");
    } else {
        alert("Email non presente nella lista");
    }
});