"use strict";
//Task 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
//that should be printed on the shirt. The function should print a sentence summarizing the size of the 
//shirt and the message printed on it. Call the function.
function make_shirt(size, Label) {
    return `my shirt size is ${size} and label is ${Label}`;
}
make_shirt(36, "Hello world");
let myfun = make_shirt(36, "Hello world");
console.log(myfun);
let myfunc = (size, label) => {
    return size + label;
};
console.log(myfunc(36, "Hello world"));
