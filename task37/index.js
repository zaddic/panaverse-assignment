function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love TypeScript'; }
    console.log("the size is ".concat(size, " and message is ").concat(text));
}
//call function with default parameters
make_shirt();
//call the function with custonparameters
make_shirt('medium', 'Some custom message');
