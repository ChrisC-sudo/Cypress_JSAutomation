class Person {
name: string;
age: number;
gender: string;

public constructor(name:string,age:number, gender?:any)
{
this.name = name;
this.age = age;
this.gender= gender;
}

public NameAge()
{
    console.log("My name is: "+this.name+" and age is: "+ this.age)
}
public getGender()
{
    console.log("Gender: "+ this.gender)
}
}

const pers = new Person("merl",25,"Male");
pers.NameAge()
pers.getGender()
// const one = pers.name = "Sweety";
// const two = pers.age = 25;
// console.log(one + " and " + two) 