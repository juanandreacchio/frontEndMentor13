const btnCambiarMode = document.querySelector('.dm-btn');
const body = document.querySelector('body');
let darkMode = false;
desactivarDarkMode();

function activarDarkMode(){
    darkMode = true;
    body.classList.add('dark-mode');
}

function desactivarDarkMode(){
    darkMode = false;
    body.classList.remove('dark-mode');
}

btnCambiarMode.addEventListener('click',() => {
    if (darkMode){
        desactivarDarkMode();
    }
    else{
        activarDarkMode();
    }
})