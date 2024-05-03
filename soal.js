//luas persegi panjang
let p = 5, l = 3
let luas = p * l 
console.log("luas persegi ==>"  ,luas)

//perimeter of rectangle
let kel = 2*(p+l)
console.log("keliling persegi ==>" , kel)


//diameter circle
let radius = 5
let diameter = radius ** 2
console.log("diameter ==>" , diameter)

//circumference
let circum = 2 * Math.PI * radius
console.log("circumference ==>" , circum)

//area
let area = Math.PI * radius ** 2
console.log("area ==>" , area)

//triangle
let a = 80, b = 65
let angles = 180 - (a + b)
console.log("angles ==>", angles)

//different day
let date1 = new Date("2022-01-22"), date2 = new Date("2022-01-20")
let hasil = (date1 - date2) / (1000 * 60 * 60 * 24)
console.log("day ==>", hasil)

//convert
let days = 90
let year = Math.floor(days / 365)
let yearleft = days % 365
let month =Math.floor(yearleft / 30) 
let day = (days % 365) % 30 


console.log(days+" days", "=", "year ==> "+year, "month ==> "+ month, "days ==> "+ day)

