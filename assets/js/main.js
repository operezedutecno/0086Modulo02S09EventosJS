// Referencias de elementos HTML
var txtEmail = document.getElementById("txt-email");
var txtPassword = document.querySelector("#txt-password");
var formulario = document.querySelector("#formulario");
var divPasswordHelp = document.getElementById("password-help")
var divEmailHelp = document.getElementById("email-help")
var labelPassword = document.getElementById("lbl-password")
var labelEmail = document.getElementById("lbl-email")


function limpiarErrores() {
    divEmailHelp.innerHTML = ""
    divPasswordHelp.innerHTML = ""

    labelEmail.classList.remove("text-danger")
    labelPassword.classList.remove("text-danger")
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault()
    limpiarErrores()
    if(txtEmail.value == '') {
        divEmailHelp.innerHTML = "Ingresar el correo electrónico"
        labelEmail.classList.add("text-danger")
    }

    if(txtPassword.value == '') {
        divPasswordHelp.innerHTML = "Ingresar la contraseña"
        labelPassword.classList.add("text-danger")
    }
})

// formulario.addEventListener("submit", function(evento) {
//     evento.preventDefault()
//     if(txtEmail.value == '') {
//         divEmailHelp.innerHTML = "Ingresar el correo electrónico"
//     } else {
//         divEmailHelp.innerHTML = ""
//     }

//     if(txtPassword.value == '') {
//         divPasswordHelp.innerHTML = "Ingresar la contraseña"
//     } else {
//         divPasswordHelp.innerHTML = ""
//     }
// })


// Opción 2 EventListener
// function procesaFormulario(evento) {
//     evento.preventDefault()
//     alert(txtEmail.value)
//     alert(txtPassword.value)
// }
// formulario.addEventListener("submit", procesaFormulario)


console.log(txtPassword);