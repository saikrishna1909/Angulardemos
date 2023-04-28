// const car:{make:string,model:string,year:number}={
//     make:"Toyota",
//     model:"Innovo",
//     year:2017
// }
// console.log(car)

interface ICar{
    make:string,
    model:string,
    year:number,
    color:string
}

// const car :ICar={
//     make:"Toyota",
//     model:"Innovo",
//     year:2017,
//     color:"Orange"

// }
// console.log(car)
interface num extends ICar{
    mileage:number;
}
const car :num={
    make:"Toyota",
    model:"Innovo",
    year:2017,
    color:"Orange",
    mileage:25

}
console.log(car)



