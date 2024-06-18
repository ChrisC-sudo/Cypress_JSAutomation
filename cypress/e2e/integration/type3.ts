import { Animal } from "./type2";

export class BreedType extends Animal{
    breed : string;

    public constructor(name:string,size:number,breed:string){
        super(name,size);
        this.breed = breed;

    }
    public wagTail(): void {
        if(this.name == "Sam")
            {
        console.log(`${this.name} is wagging tail happily!`);
        }
        else{
            console.log(`${this.name} is wagging tail happily!`);

        }
    }
}

const childDog = new Animal("Child Sam",5);
const dogBreed = new BreedType("Child Sam",2,"German");
childDog.makeDogSound() 
dogBreed.wagTail();

const childCat = new Animal("Child San",2);
const catBreed = new BreedType("Child Cat",10,"cat Breed")
childCat.makeCatSound()
catBreed.wagTail() 