
console.log("for loop")

for(let i = 2; i<=10; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}


console.log("----------")
console.log("while loop")
let start = 1
while(start <= 20){
    if(start % 2 == 1){
        console.log(start)
    }
    start++
}

console.log("------------")
console.log("do while loop")
let start2 = 1
do{
    console.log(start2)
    start2++
}while(start2 <= 10)

for(let i = 0;i <5 ;i++){
    console.log("dio says: ")
    if( i === 3)continue
    console.log("za warudo ", i)
}

