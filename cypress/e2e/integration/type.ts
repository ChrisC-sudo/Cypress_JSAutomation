class Person {
name: string;
age: number;

public constructor(name:string,age:number, gender?:any)
{
this.name = name;
this.age = age;
}

public NameAge()
{
    console.log("My name is: "+this.name+" and age is: "+ this.age)
}
}

const pers = new Person("merl",25,"Male");
pers.NameAge()
// const one = pers.name = "Sweety";
// const two = pers.age = 25;
// console.log(one + " and " + two) 