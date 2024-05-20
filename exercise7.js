function twoObject(x, y){
    let flag = true
    for(let key in x){
        if(!x[key] || x[key] != y[key]){
            flag = false
            break
        }
    } 
    return flag
    
}

console.log(twoObject({a:3},{a:2}))
console.log(twoObject({a:'hello'},{a:'hello'}))

function fac(n){
    if(n==1){
        return 1
    } else{
        return n * fac(n-1)
    }
}
console.log(fac(5))

function x(o){
    let res = []
    for(let item of o){
        let newObj = {}
        for(let key in item){
            newObj[item[key]] = key
        }
        res.push(newObj)
    }
    return res
}

console.log(x([{name:"david", age:20}, {name:"david", age:20}]))

function merge(arr, arr2){
    let merged = [...arr, ...arr2]
    let result = []

    for(let i = 0;i < merged.length; i++){
        let flag = true
        for(let j = i+1; j < merged.length;j++){
            if(i!=j && merged[i].name == merged[j].name){
                flag = false
                break
            }
        }
        if(flag){
            result.push(merged[i])
        }
    }
    return result
}

console.log(merge([
    {name:"agus 1", email:"agus@mail.com"},
    {name:"agus 2", email:"agus2@mail.com"}
], [
    {name:"agus 1", email:"agus1@mail.com"},
    {name:"agus 3", email:"agus3@mail.com"} 
]))







