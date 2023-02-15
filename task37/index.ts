function make_shirt(size='large', text='I love TypeScript'){
    console.log(`the size is ${size} and message is ${text}`)
}

//call function with default parameters
make_shirt();

//call the function with custonparameters
make_shirt('medium', 'Some custom message');