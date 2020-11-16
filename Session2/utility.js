/*
function abc(e){
    console.log(e)
}*/


/*
class Greet{
    greeting(){
        return 'hello';
    }
}

var greet = new Greet()
console.log(greet.greeting())*/

/*
class Greet{

    greeting(){
        return 'hello';
    }
}

var greet = new Greet()
console.log("1", greet.greeting())

function readonly(target, name, descriptor){//name is the name of the method called greeting(), target is the whole method ,
    descriptor.writable =false
    return descriptor

}

greet.greeting = () => "huraay"
console.log("2", greet.greeting())*/



//Named Export
export const programmingList = ["Svelte", "React", "Vue", "Angular"]

export const helloSvelteHandler = () => {
    return "Hello Svelte";

}

export const bookDetails ={
    name: "SalesForce JS series",
    author: "Felix Ackuayi"
}