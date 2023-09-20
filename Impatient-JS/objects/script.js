'use strict'

const myObject = {
    myProperty: 1,
    myMethod() {
        return 2;
    },
    get myAccessor() {
        return this.myProperty;
    },
    set myAccessor(value) {
        this.myProperty = value;
    },
};

/*
    * Being able to create object directly (without classes) 
    * is one of the highlights of JavaScript

*/

// todo: Spreading into objects:

const original = {
    a: 1,
    b: {
        c: 3,
    },
};

const modifiedCopy = {
    ...original,
    d: 4,
};

console.log(modifiedCopy);
/*
{
    "a": 1,
    "b": {
        "c": 3
    },
    "d": 4
}
*/

// ! Caveat: spreading copies shallowly (property values are shared)
modifiedCopy.a = 5; //* does not affect 'original'
modifiedCopy.b.c = 6; //* affects 'original'

// todo: We can also use spreading to make an unmodified (shallow) copy of an object
const exactCopy = {...modifiedCopy};
console.log(exactCopy);