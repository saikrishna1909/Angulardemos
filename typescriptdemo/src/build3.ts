function hello():void{
    console.log("hello");
}
function add(n1:number,n2:number):number{
    return n1+n2
}
function add3(n1:number,n2:number,n3:number):number{
    return n1+n2+n3;
}
function add4(n1:number,n2:number,n3?:number):number{
    return n1+n2+(n3||0);
}
console.log(add(1,2))

console.log(add3(1,2,3))
console.log(add4(3,2))
console.log(add4(4,2,3))