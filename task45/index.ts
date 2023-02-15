function make_car(menufecturer, model, ...args){
    return {
        menufecturer:menufecturer,
        model:model,
        ...args
    }
}

console.log(make_car('Honda', 2017, {color:'white', make:'Japan'}))