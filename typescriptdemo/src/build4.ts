class Person{
    name:string="";
}
const p=new Person();
p.name="sai"
console.log(p)

class student{
    private name:string;
    public constructor(name:string){
        this.name=name
    }
    public getName():string{
        return this.name
    }
}
const st=new student("krishna")
console.log(st)