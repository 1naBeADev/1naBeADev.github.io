const textsec = document.getElementById('smallname');
const picsec= document.querySelector('.picsec');


picsec.addEventListener('mouseover',()=>{
    textsec.style.visibility = 'visible';
    textsec.style.opacity = '1';
    document.getElementById('rogtxt').style.color = 'red';
    document.getElementById('rogtxt').style.transition = '.5s linear';
    textsec.style.transition = '.5s linear';
})

picsec.addEventListener('mouseout',()=>{
    textsec.style.visibility = 'hidden';
    textsec.style.opacity = '0';
    document.getElementById('rogtxt').style.color = '#fff';
    document.getElementById('rogtxt').style.transition = '.5s linear';
    textsec.style.transition = '.5s linear';
})