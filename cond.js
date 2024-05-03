if(7 < 5 == false){
    console.log("executed")
} else{
    console.log("false")
}


let trafficStat = "yellow"
/*
if(trafficStat == "red"){
    console.log("stop")
} else if(trafficStat == "yellow"){
    console.log("drive slow")
} else if(trafficStat == "green"){
    console.log("drive")
} else{
    console.log("error")
}
*/

//score
let score = 99

if(score >= 85 && score <= 100){
    console.log("A")
} else if(score >= 75 && score <= 84){
    console.log("B")
} else if(score <= 74 && score >= 0 ){
    console.log("C")
}else{
    console.log("invalid number")
}


//switch case

let fruit = "Orange"

switch(fruit) {
    case "Orange":
        console.log("orange are $0.59 a pond")
        break;
    case "Mangoes":
    case "Papayas":
        console.log("mangoes and papayas are $2.79 a pond")
        break
    default:
        console.log("sorry , we are out of fruit")
}


//logical operator

let car = "suzuki"

if(car === "suzuki" || car === "toyota"){
    console.log("car is good")
}

//ternary

let ter = car === "suzuki" && car === "honda" ? "car is good" : "car is ugly"
console.log(ter)