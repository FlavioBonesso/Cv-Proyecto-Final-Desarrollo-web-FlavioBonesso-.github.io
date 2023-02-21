
const btn_vermás1 = document.getElementById ('btn_vermás1');

const esconderText1 = document.getElementById ('esconderText1');

btn_vermás1.addEventListener('click', toggleText1);

function toggleText1 (){
    esconderText1.classList.toggle('mostrar');

    
    if(esconderText1.classList.contains('mostrar')){
        btn_vermás1.innerHTML = 'ver menos';
    }   
    else {
        btn_vermás1.innerHTML = 'ver más';
    };

}



const btn_vermás2 = document.getElementById ('btn_vermás2');

const esconderText2 = document.getElementById ('esconderText2');
 
btn_vermás2.addEventListener('click', toggleText2);

function toggleText2 (){
    esconderText2.classList.toggle('mostrar');

    if(esconderText2.classList.contains('mostrar')){
        btn_vermás2.innerHTML = 'ver menos';
    }   
     else {
        btn_vermás2.innerHTML = 'ver más';
    };
    
}



const btn_vermás3 = document.getElementById ('btn_vermás3');

const esconderText3 = document.getElementById ('esconderText3');

btn_vermás3.addEventListener('click', toggleText3);

function toggleText3 (){
    esconderText3.classList.toggle('mostrar');

    if(esconderText3.classList.contains('mostrar')){
        btn_vermás3.innerHTML = 'ver menos';
        }   
        else {
        btn_vermás3.innerHTML = 'ver más';
        };
    
}

