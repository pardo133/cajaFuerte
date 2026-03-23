const boton = document.getElementById("btn-parte-b")
const text = document.getElementById("status")
boton.addEventListener("click", () => {
    text.textContent="Operacion en curso"
    document.body.style.backgroundColor="#2c3e50"
    console.log("Alumno B ha iniciado la operación.");

})