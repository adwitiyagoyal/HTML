// async function goyal(){
//     let delhiWeather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("27 Deg")
//         },1000)
//     }) 

//     let bangloreweather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("21 Deg")
//         },4000)
//     })

//     // delhiWeather.then(alert)
//     // bangloreweather.then(alert)
//     console.log("fetching delhiW");
//     let delhiw = await delhiWeather;
//     console.log("fetched delhiw "+delhiw)
//     console.log("fetching bangaloreW");
//     let banglorew= await bangloreweather;
//     console.log("fetched bangalorew "+banglorew)
//     return [delhiw,banglorew]
//  console.log("fetched bangalorew "+banglorew)

// }

// console.log("welcome");

// goyal().then((value)=>{
//     console.log(value)
// })

const req = new XMLHttpRequest();

req.addEventListener('readystatechange' , ()=>{
    //console.log(req,req.readyState);
    if(req.readyState==4 && req.status==200){
        console.log(req.responseText);
    }
});

req.open('GET','https://jsonplaceholder.typicode.com/todos/1');
req.send();





