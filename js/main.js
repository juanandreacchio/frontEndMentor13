const btnCambiarMode = document.querySelector('.dm-btn');
const body = document.querySelector('body');
let darkMode = false;
const textoDarkMode = document.querySelector('.btn-text');
desactivarDarkMode();

function activarDarkMode(){
    darkMode = true;
    body.classList.add('dark-mode');
}

function desactivarDarkMode(){
    darkMode = false;
    body.classList.remove('dark-mode');
}

btnCambiarMode.addEventListener('mouseover',() =>{
    if(darkMode){
        textoDarkMode.classList.add('white-text')
    }
})

btnCambiarMode.addEventListener('mouseout',() =>{
    if(darkMode){
        textoDarkMode.classList.remove('white-text')
    }
})

btnCambiarMode.addEventListener('click',() => {
    if (darkMode){
        desactivarDarkMode();
    }
    else{
        activarDarkMode();
    }
})