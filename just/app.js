

// normal function or hosted// call any where
// getinfo();
// function getinfo(){
//     console.log(" welcome sir")
// }

// function expression or not hosted // not call anywhere only call line below

// var getinfo= function (){
//     console.log(" welcome sir")
// }
// getinfo();
//---------------global objects--
// setTimeout(()=>{
//     console.log("welcome sir");
// },3000)

x=0;
let timer= setInterval(()=>{
    x++;
    console.log(x +" welcome ");
    if(x >=5){
        clearInterval(timer);

    }
},2000)
