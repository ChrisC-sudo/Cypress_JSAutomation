export class Animal{
    name: string;
    color:string;
    size:number;

    public constructor(name:string,size:number,color?:any)
    {
        this.name = name;
        this.size = size;
        this.color= color;
    }

    public makeDogSound(): void{
        console.log("Woof... my size is "+this.size)
    }
    public makeCatSound() : void{
        console.log("Meow... my size is "+this.size)
    }
}
// const dog = new Animal("Dan",2);
// const cat = new Animal("Can",1);
// dog.makeDogSound()
// cat.makeCatSound()