const txtarea = document.querySelector('.txtarea');
const fsub = document.querySelector('.fbsub');
const down = document.querySelector('.fa-arrow-down');

down.addEventListener('click',()=>{
    txtarea.classList.toggle('txtAvis');
    fsub.classList.toggle('fsubvis');
})