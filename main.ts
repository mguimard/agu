let b : boolean = true

function f() : string{
    if(b) {
        return "hello"
    }
    return ""
}

let s: string = f();

console.log(s)

let x : number | string | Function = 1;

console.log(typeof x === 'string')
x= "hello"
console.log(typeof x === 'string')
x = function(){

}


function square( n : number ) : number {
    return n * n
}

const square2 = (n:number) : number => n * n


const numbers : number[] = [1,2,3]
const number2 : Array<number> = [1,2,3]

interface Facture {
    code: number;
    prix: number;
}

let f1 : Facture = {
    code: 123,
    prix: 1.54
}

type Animal = {
    age: number;
}

let medor : Animal = {
    age : 10
} 

function retourneRien () : void {

}

let v = retourneRien();
v = undefined;
console.log(v)


class Box<T> {

    getValues() : T[]{
        return [];
    }
}

let numbers3 = new Box<number>();
let strings = new Box<string>();

numbers3.getValues() // number[]