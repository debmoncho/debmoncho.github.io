const regExpNombre = /^[a-zA-Z]{0,9}$/;
const regExpMail = /^[\w-.]+@[\w-_]+(\.[a-zA-Z]{2,4}){1,2}$/
const regExpTelefono = /^[1-9][0-9]{9}$/;

function limpiarErrores(event) {
    const actualInput = event.target;
    const actualHermano = actualInput.nextSibling;

   if(actualHermano.classList && actualHermano.classList.contains('colorRojo')) {

        actualHermano.remove();   
   }
}

function validar() {

    let flagError = false;

    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const mail = document.getElementById('mail');
    const mensaje = document.getElementById('mensaje');

    if(nombre.value == "" || nombre.value.length > 9 || !regExpNombre.test(nombre.value)){
        console.log("Error nombre");
        const spanError = document.createElement('span');
        spanError.textContent = "*Ingrese un nombre válido";
        spanError.className= 'colorRojo';
        nombre.insertAdjacentElement('afterend',spanError);

        flagError = true;
    }

    if(mail.value == "" || !regExpMail.test(mail.value)){

        console.log("Error e-mail");
        const spanError = document.createElement('span');
        spanError.textContent = "*Ingrese un e-mail válido";
        spanError.className= 'colorRojo';
        mail.insertAdjacentElement('afterend', spanError);

        flagError = true;
    }


    if(telefono.value && !regExpTelefono.test(telefono.value)){
        console.log("Error telefono");
        const spanError = document.createElement('span');
        spanError.textContent = "*Ingrese un teléfono válido";
        spanError.className= 'colorRojo';
        telefono.insertAdjacentElement('afterend', spanError);

        flagError = true;
    }

    if(!flagError){
        let texto;
        if(telefono.value) {
            texto = `Hola ${nombre.value}, te mandaremos un mail a ${mail.value} 
            o te llamaremos al ${telefono.value} para finalizar la adopcion de la mascota`;
        } else {
            texto = `Hola ${nombre.value}, te mandaremos un mail a ${mail.value}
            para finalizar la adopcion de la mascota`;
       }

        const li = document.createElement('li');
        li.textContent = texto;

        const ul = document.getElementById('list');
        console.log(ul);
        ul.appendChild(li);

        nombre.value = "";
        mail.value = "";
        telefono.value = "";
        mensaje.value = "";

    }

    return false;

}