let Perfil = document.querySelector("#cont-perf")
let Experiencia = document.querySelector("#cont-exp")
let contacto = document.querySelector("#container-form")
let btnContacto = document.querySelector(".btn-formulario")

const comprobarForm = (nombre, tlf , email, msj) =>{
    
    let error = true;
    if(nombre.length > 0){
        if(tlf.length > 0){
            if(email.length > 0){
                if(msj.length > 0){
                    error = false
                }else{
                    alert('Debe Ingresar un mensaje')
                    console.log("ERROR- EL CAMPO DEL MENSAJE NO PUEDE ESTAR VACIO")
                }
            }else{
                alert('Debe Ingresar un email')
                console.log("ERROR- EL CAMPO DEL EMAIL NO PUEDE ESTAR VACIO") 
            }
        }else{
            alert('Debe Ingresar un Telefono')
            console.log("ERROR- EL CAMPO DEL TELEFONO NO PUEDE ESTAR VACIO")
        }
    }else{
        alert('Debe Ingresar un nombre')
        console.log("ERROR- EL CAMPO DEL NOMBRE NO PUEDE ESTAR VACIO")
    }

    return error;
}


document.querySelector("#nav-perf").addEventListener('click', () => {
    Perfil.style.display = 'block'
    Experiencia.style.display = 'none'
    contacto.style.display = 'none'
    window.scrollTo({
        top: 300,
        behavior: 'smooth',
    })
})


document.querySelector("#nav-exp").addEventListener('click', () => {
    Perfil.style.display = 'none'
    Experiencia.style.display = 'block'
    contacto.style.display = 'none'
    window.scrollTo({
        top: 300,
        behavior: 'smooth',
    })
})

document.querySelector("#nav-contact").addEventListener('click', () => {
    Perfil.style.display = 'none'
    Experiencia.style.display = 'none'
    contacto.style.display = 'block'
    window.scrollTo({
        top: 300,
        behavior: 'smooth',
    })
})

document.querySelector("#btn1").addEventListener('click', () => {
    Perfil.style.display = 'block'
    Experiencia.style.display = 'none'
    contacto.style.display = 'none'
    window.scrollTo({
        top: 600,
        behavior: 'smooth',
    })
});

document.querySelector("#btn2").addEventListener('click', () => {
    Perfil.style.display = 'none'
    Experiencia.style.display = 'block'
    contacto.style.display = 'none'
    window.scrollTo({
        top: 400,
        behavior: 'smooth',
    })
});

document.querySelector("#btn3").addEventListener('click', () => {
    Perfil.style.display = 'block'
    Experiencia.style.display = 'none'
    window.scrollTo({
        top: 1200,
        behavior: 'smooth',
    })
});

document.querySelector('.btn-formulario').addEventListener('click', () =>{
    const nombre = document.querySelector('#v-nombre').value
    const tlf = document.querySelector("#v-contacto").value
    const email = document.querySelector("#v-email").value
    const mensaje = document.querySelector("#v-mensaje").value

    if (!comprobarForm(nombre, tlf, email, mensaje)){
        const msjes = localStorage.getItem('msjes')? JSON.parse(localStorage.getItem('msjes')):[]
        
        msjes.push({ nombre: nombre, telefono: tlf, email: email, mensaje: mensaje})
        
        localStorage.setItem('msjes', JSON.stringify(msjes))
        

        alert('Mensaje Enviado Satisfactoriamente')

        location("index.html")
    } else{
        alert ("Ha ocurrido un error")
    }
    
})