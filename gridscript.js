const card1=document.querySelector('#back1');
const card2=document.querySelector('#front1');
const card3=document.querySelector('#box3');
const card4=document.querySelector('#box4');

let rotater=0;


let audio= new Audio("tone.mp4");
//FOR CARD1
card1.addEventListener('click',()=>{
    rotater=rotater+180;
    card1.style.transform = 'rotateY('+rotater+'deg)';
    
    audio.play();
   
})

card1.addEventListener('click', getjoke1);
async function getjoke1(){
    const jokeData= await fetch("https://official-joke-api.appspot.com/random_joke",{
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeobj=await jokeData.json();
    card1.innerHTML=jokeobj.setup + jokeobj.punchline;
}


card2.addEventListener('click',()=>{
    rotater=rotater+180;
    card2.style.transform = 'rotateY('+rotater+'deg)';
    
    audio.play();
   
})
card2.addEventListener('click', getjoke2);
async function getjoke2(){
    const jokeData= await fetch("https://official-joke-api.appspot.com/random_joke",{
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeobj=await jokeData.json();
    card2.innerHTML=jokeobj.setup + jokeobj.punchline;
}

card3.addEventListener('click',()=>{
    rotater=rotater+180;
    card3.style.transform = 'rotate('+rotater+'deg)';
    
    audio.play();
   
})
card3.addEventListener('click', getjoke3);
async function getjoke3(){
    const jokeData= await fetch("https://official-joke-api.appspot.com/random_joke",{
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeobj=await jokeData.json();
    card3.innerHTML=jokeobj.setup + jokeobj.punchline;
}

card4.addEventListener('click',()=>{
    rotater=rotater+180;
    card4.style.transform = 'rotate('+rotater+'deg)';
    
    audio.play();
   
})
card4.addEventListener('click', getjoke4);
async function getjoke4(){
    const jokeData= await fetch("https://official-joke-api.appspot.com/random_joke",{
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeobj=await jokeData.json();
    card4.innerHTML=jokeobj.setup + jokeobj.punchline;
}





