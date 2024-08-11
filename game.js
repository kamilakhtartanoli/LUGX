let card1 = document.querySelector('.cd-01');
let card2 = document.querySelector('.cd-02');
let card3 = document.querySelector('.cd-03');
let card4 = document.querySelector('.cd-04');

let h1 = document.querySelector('.hd-1');
let h2 = document.querySelector('.hd-2');
let h3 = document.querySelector('.hd-3');
let h4 = document.querySelector('.hd-4');

let ic1 = document.querySelector('.ic-1');
let ic2 = document.querySelector('.ic-2');
let ic3 = document.querySelector('.ic-3');
let ic4 = document.querySelector('.ic-4');

card1.addEventListener('mouseover',()=>{
    h1.style.color="#0171f9";
    ic1.style.backgroundColor="#0171f9";
});
card1.addEventListener('mouseout',()=>{
    h1.style.color="black";
    ic1.style.backgroundColor="#ee626b";
});

card2.addEventListener('mouseover',()=>{
    h2.style.color="#0171f9";
    ic2.style.backgroundColor="#0171f9";
});
card2.addEventListener('mouseout',()=>{
    h2.style.color="black";
    ic2.style.backgroundColor="#ee626b";
});

card3.addEventListener('mouseover',()=>{
    h3.style.color="#0171f9";
    ic3.style.backgroundColor="#0171f9";
});
card3.addEventListener('mouseout',()=>{
    h3.style.color="black";
    ic3.style.backgroundColor="#ee626b";
});

card4.addEventListener('mouseover',()=>{
    h4.style.color="#0171f9";
    ic4.style.backgroundColor="#0171f9";
});
card4.addEventListener('mouseout',()=>{
    h4.style.color="black";
    ic4.style.backgroundColor="#ee626b";
});
// card=================================================== 2  complete.

let i1 = document.querySelector('.i-1');
let i2 = document.querySelector('.i-2');
let i3 = document.querySelector('.i-3');
let i4 = document.querySelector('.i-4');
let icons =document.querySelectorAll('.ic');
console.log(icons);

i1.addEventListener('mouseover',()=>{
    icons[0].style.backgroundColor='#ee626b';
});
i1.addEventListener('mouseout',()=>{
    icons[0].style.backgroundColor='#0171f9';
});

i2.addEventListener('mouseover',()=>{
    icons[1].style.backgroundColor='#ee626b';
});
i2.addEventListener('mouseout',()=>{
    icons[1].style.backgroundColor='#0171f9';
});

i3.addEventListener('mouseover',()=>{
    icons[2].style.backgroundColor='#ee626b';
});
i3.addEventListener('mouseout',()=>{
    icons[2].style.backgroundColor='#0171f9';
})


i4.addEventListener('mouseover',()=>{
    icons[3].style.backgroundColor='#ee626b';
});
i4.addEventListener('mouseout',()=>{
    icons[3].style.backgroundColor='#0171f9';
})

