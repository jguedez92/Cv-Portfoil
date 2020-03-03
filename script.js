let Perfil = document.querySelector("#cont-perf")
let Experiencia = document.querySelector("#cont-exp")
let contacto = document.querySelector("#container-form")
let btnContacto = document.querySelector(".btn-formulario")

const comprobarForm = (nombre, tlf , email, msj) =>{
    
    let error = 'true';
    if(nombre.lenght > 0){
        error ='false'
    }else{
        alert('Debe Ingresar un nombre')
    }

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

