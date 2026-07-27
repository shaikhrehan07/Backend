class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    talk()
    {
        console.log(`Hi, My name is ${this.name}`);
    }
}
let p1=new Person('adam',20);
let p2=new Person('Rehan',19);
