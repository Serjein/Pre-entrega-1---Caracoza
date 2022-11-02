//Favor de validar en el Login de HTML (el profesor nos permitio usar onclick por excepción)

function login() {
    let usuario = prompt("ingresa tu nombre de usuario")
    let pasword = prompt("ingresa tu contraseña")
    if ((usuario === "Alejandro" && pasword === "1234") && usuario.trim().length > 0) {
        alert("Bienvenido " + usuario)

        usuariologueado = usuario

    } else if (usuario != "Alejandro")
    {alert("El usuario no coincide")
}
    else {
        alert("El dato es incorrecto " + usuario)
    }

}

//Este ejemplo esta simulando en el caso de tener varios discos de cada artista

let consulta = confirm("¿Te puedo ayudar con lo que buscas?")

if (consulta){
    let artista = prompt("¿Qué artista buscas (System of a Down,Muse,Korn,Slipknot)")
    let disco = prompt("Elige el disco de " + artista)

    switch(disco){
        case "Toxicity":
            alert("Si, tenemos " + disco + " de " + artista)
            break

            case "The 2nd law":
                alert("Si, tenemos " + disco + " de " + artista)
            break

            case "Issues":
                alert("Si, tenemos " + disco + " de " + artista)
            break

            case "All Hope Is Gone":
                alert("Si, tenemos " + disco + " de " + artista)
            break
            default:
                alert("no tenemos " + disco + " de ese artista")

    }
}