//celcius to fahrenheit
console.log("-------")
let celcius = 60
let fahrenheit = (celcius* 1.8) + 32
console.log("celcius --> ", celcius, "=","fahrenheit -->" ,fahrenheit)

//ganjil genap
console.log("-------")
let num = 1543
if(num % 2 == 0){
    console.log(num, "-->even number")
} else{
    console.log(num, "-->odd number")
}

//bilangan prima
console.log("-------")
let num2 = 6
let isPrime = true
for(let i=2; i< num2;i++){
    if(num2 % i == 0){
        isPrime = false
        break;
    }
}
if(isPrime){
    console.log(num2," bilangan prima")
} else{
    console.log(num2,"-->bukan bilangan prima")
}

//sum
console.log("-------")
let sum = 0
let n = 5
for(let i=1; i <= n; i++){
    sum += i
}
console.log(sum,"-->sum")

//fac
console.log("-------")
let fac = 1
let n2 = 6
for(let i = 1; i <=n2; i++ ){
    fac *= i
}
console.log(fac,"-->fac")

//fibonacci
console.log("-------")
let firstNum = 1
let secondNum = 1

for(let i = 3; i <= 10;i++){
    let temp = firstNum
    firstNum = secondNum
    secondNum = temp + secondNum
}
console.log(secondNum, "-->fibonacci")

console.log("-------")
let name = "naufal afif fadhlurrohman"
let count3 = 0
for(let i = 0; i <= name.length - 1; i++){
    if(name[i] == "a"){
        count3 ++
    }
}
console.log(count3)
