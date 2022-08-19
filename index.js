function receivesAFunction(name) {
    name("Zablon Onchari");
}
receivesAFunction();

function returnsANamedFunction() {
    let food = 'pilau';
    if (food === 'pilau') {
        return function meal() {
            return 'Pilau is my favourite meal';
        }
    }else {
        return 'thats not my favourite meal';
    }
}
const namedMeal = returnsANamedFunction();
console.log(namedMeal());

function returnsAnAnonymousFunction(){
    let movie = 'rogue';
    if (movie == 'rogue'){
        return function (){
            return 'This action movie is dope'
        }
    }else {
        return 'This  action movie is not dope'
    } 
}
const anonymousFunction = returnsAnAnonymousFunction
console.log(anonymousFunction())
