//slide declaration
const prev = document.getElementById('prev');
const next = document.getElementById('next');
//pc build declaration
const pcbprev = document.getElementById('pcbprev');
const pcbnext = document.getElementById('pcbnext');
//laptop delaration
const lapPrev = document.getElementById('lapTprev');
const lapNext = document.getElementById('lapTnext');
//pc components delaration
const pccprev = document.getElementById('pccprev');
const pccnext = document.getElementById('pccnext');
//pc essentials declaration
const pcenext = document.getElementById('pcEnext');
const pceprev = document.getElementById('pcEprev');
//PC case declaration
const pcCsnext = document.getElementById('pcCsnext');
const pcCsprev = document.getElementById('pcCsprev');


let count = 0;

next.addEventListener('click',function(){
    let subcount = count -= 89;
    let slidemover = document.querySelector('.ppage1cter');
    slidemover.style.left = subcount + 'em';
    slidemover.style.transition = '0.7s ease';
    console.log(count);
    if(count == -356){
        count = 0;
        slidemover.style.left = '0em';
    }
})

prev.addEventListener('click',()=>{
    let addcount = count += 89;
    let slidemover = document.querySelector('.ppage1cter');
    slidemover.style.left = addcount + 'em';
    slidemover.style.transition = '0.7s ease';
    console.log(count);
    if(count == 89){
        count = 0;
        slidemover.style.left = '0em';
    }
})

setInterval(()=>{
    next.click();
},3000);


let pcbcount = 0

pcbnext.addEventListener('click',()=>{
    let subcount = pcbcount -= 79;
    let slidemover = document.querySelector('.pcbslider');
    slidemover.style.left = subcount + 'em';
    slidemover.style.transition = '0.7s ease';
    console.log(pcbcount);
    if(pcbcount == -237){
        pcbcount = 0;
        slidemover.style.left = '0em';
    }
})

pcbprev.addEventListener('click',()=>{
    let addcount = pcbcount += 79;
    let slidemover = document.querySelector('.pcbslider');
    slidemover.style.left = addcount + 'em';
    slidemover.style.transition = '0.7s ease';
    console.log(pcbcount);
    if(pcbcount == 79){
        pcbcount = -158;
        slidemover.style.left = '-158em';
    }
})

let lapTcount = 0;

lapNext.addEventListener('click',()=>{
    let subcount = lapTcount -= 91;
    let slidemover = document.querySelector('.laptopslider');
    slidemover.style.transition = '0.7s ease';
    slidemover.style.left = subcount + 'em';
    console.log(lapTcount);
    if(lapTcount == -182){
        lapTcount = 0;
        slidemover.style.left = '0em';
    }
})

lapPrev.addEventListener('click',()=>{
    let addcount = lapTcount += 91;
    let slidemover = document.querySelector('.laptopslider');
    slidemover.style.transition = '0.7s ease';
    slidemover.style.left = addcount + 'em';
    console.log(lapTcount);
    if(lapTcount == 91){
        lapTcount = -91;
        slidemover.style.left = '-91em';
    }
})

let pcccount = 0;

pccnext.addEventListener('click',()=>{
    let subcount = pcccount -= 90;
    let slidemover = document.querySelector('.pcCslider');
    slidemover.style.transition = '0.7s ease';
    slidemover.style.left = subcount + 'em';
    console.log(pcccount);
    if(pcccount == -360){
        pcccount = 0;
        slidemover.style.left = '0em';
    }
})

pccprev.addEventListener('click',()=>{
    let addcount = pcccount += 90;
    let slidemover = document.querySelector('.pcCslider');
    slidemover.style.transition = '0.7s ease';
    slidemover.style.left = addcount + 'em';
    console.log(pcccount);
    if(pcccount == 90){
        pcccount = -270;
        slidemover.style.left = '-270em';
    }
})

let pcecount = 0;

pceprev.addEventListener('click',()=>{
    let subcount = pcecount += 92;
    let slidemover = document.querySelector('.pcEslider');
    slidemover.style.transition = '0.7s ease';
    slidemover.style.left = subcount + 'em';
    console.log(pcecount);
    if(pcecount == 92){
        pcecount = -460;
        slidemover.style.left = '-460em';
    }
})

pcenext.addEventListener('click',()=>{
    let addcount = pcecount -= 92;
    let slidemover = document.querySelector('.pcEslider');
    slidemover.style.transition = '0.7s ease';
    slidemover.style.left = addcount + 'em';
    console.log(pcecount);
    if(pcecount == -552){
        pcecount = 0;
        slidemover.style.left = '0em';
    }
})

let pcCscounter = 0;

pcCsnext.addEventListener('click',()=>{
    let addcount = pcCscounter -= 94;
    let slidemover = document.querySelector('.pcCsslider');
    slidemover.style.transition = '0.7s ease';
    slidemover.style.left = addcount + 'em';
    console.log(pcCscounter);
    if(pcCscounter == -188){
        pcCscounter = 0;
        slidemover.style.left = '0em';
    }
})

pcCsprev.addEventListener('click',()=>{
    let subcount = pcCscounter += 94;
    let slidemover = document.querySelector('.pcCsslider');
    slidemover.style.transition = '0.7s ease';
    slidemover.style.left = subcount + 'em';
    console.log(pcCscounter);
    if(pcCscounter == 94){
        pcCscounter = -94;
        slidemover.style.left = '-94em';
    }
})