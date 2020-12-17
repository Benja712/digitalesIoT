$(function () {
    const socket = io();

    //obteniendo elementos DOM
    const $passForm = $('#pass-form');
    const $password = $('#pass');
    const $sendForm = $('#send-form');
    const $sendPass = $('#pass-send');

    //funciones
    $passForm.submit(e => {
        e.preventDefault();
        const pass = $password.val();
        if(pass.length > 16){
            alert('invalid password it is to long');
        }else {
            socket.emit('change password', pass);
            $password.val('');
        }
    });

    $sendForm.submit(e => {
        e.preventDefault();
        socket.emit('send password', 'ya ya jalo');
    });
})

//DOM funcions
function mostrarContrasena() {
    let tipo = document.getElementById("pass");
    if (tipo.type == "password") {
        tipo.type = "text";
    } else {
        tipo.type = "password";
    }
}