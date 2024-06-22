//przykladowy string
const greeting: string="Hello, world!";
//przykladowa tablica
const numbers: number[]=[1,2,3,4,5];

// przykladowe obiekty
interface Person {
    name: string;
    age: number;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

const person: Person = {
    name: "Jan Kowal",
    age: 45,
};

const product: Product = {
    id:1,
    name:"bulka",
    price:0.34,
};
//funkcja laczaca string i liczbe
function createGreeting(name: string, age: number): string{
    return 'Czesc mam na imie ${name} i mam ${age} lat';
}
//funkcja laczaca string z tablicy w jeden ciag
function joinStrings(arr: string[]): string{
    return arr.join(", ");
}
//wywolanie
console.log(createGreeting(person.name, person.age));
console.log(joinStrings(["Hello", "world","!"]));