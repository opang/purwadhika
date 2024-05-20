let calculateAge = (date) =>{
    let a = Math.floor((new Date() - date) / (365 * 24 * 60 * 60 * 1000))

    return a
}

const calculate = (arr) =>{
    let res = {
        score:{
            highest:arr[0].score,
            lowest:arr[0].score,
            avg:0
        },
        age:{
            highest:calculateAge(arr[0].age1),
            lowest:calculateAge(arr[0].age1),
            avg:0
        }
    }

    let totalScore = 0
    let totalAge = 0

    for(let i = 0; i < arr.length;i++){
        if(arr[i].score > res.score.highest){
            res.score.highest = arr[i].score
        }else if(arr[i].score < res.score.lowest){
            res.score.lowest = arr[i].score
        }
        
        if(calculateAge(arr[i].age1) > res.age.highest){
            res.age.highest = calculateAge(arr[i].age1)
        }else if(calculateAge(arr[i].age1) < res.age.lowest){
            res.age.lowest = calculateAge(arr[i].age1)
        }

        totalScore += arr[i].score
        totalAge += calculateAge(arr[i].age1)
        
    }
    let avgScore = Math.floor(totalScore / arr.length)
    let avgAge = Math.floor(totalAge / arr.length)

    res.score.avg = avgScore
    res.age.avg = avgAge

    return res
}

console.log(calculate([
    {
        name: "agus",
        email: "agus@gmail.com",
        age1: new Date("2000-03-20"),
        score: 98
    },
    {
        name: "joko",
        email: "joko@gmail.com",
        age1: new Date("1999-02-30"),
        score: 60
    },
    {
        name: "zainal",
        email: "zainal@gmail.com",
        age1: new Date("1999-05-30"),
        score: 80
    },
    {
        name: "gibran",
        email: "gibran@gmail.com",
        age1: new Date("1990-02-15"),
        score: 89
    }
]))



console.log("------------------------------------")

class Produk{
    #name=""
    #price=0

    set setName(name){
        if(name.length <= 3){
            throw new Error("name must be more than 3 chars")
        }else{
            this.#name = name
        }
        
    }
    get getName(){
        return this.#name
    }


    set setPrice(price){
        this.#price = price
    }
    get getPrice(){
        return this.#price
    }

    static warehouse = []
}

let laptop = new Produk()
laptop.setName = "asus rog"
laptop.setPrice = 1000000

let mouse = new Produk()
mouse.setName = "digitex"
mouse.setPrice = 10000

let monitor = new Produk()
mouse.setName = "lenovo"
mouse.setPrice = 1000

Produk.warehouse.push(laptop, mouse, monitor)

console.log(Produk.warehouse)

class Transaction{
    #total = 0
    cart =[]

    addToCart(produk){
        this.cart.push(produk)
        this.#total += produk.total
    }

    get getTotal(){
        return this.#total
    }

    get checkout(){
        return {
            cart:this.cart,
            total:this.#total
        }
    }


}

let transaksi = new Transaction()

transaksi.addToCart({
    name:Produk.warehouse[0].getName,
    price:Produk.warehouse[0].getPrice,
    qty:10,
    total:Produk.warehouse[0].getPrice * 10
},
{
    name:Produk.warehouse[1].getName,
    price:Produk.warehouse[1].getPrice,
    qty:10,
    total:Produk.warehouse[1].getPrice * 10
})

console.log(transaksi.cart)
console.log(transaksi.getTotal)
console.log(transaksi.checkout)