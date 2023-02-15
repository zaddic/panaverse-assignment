var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ['Ahmed', 'Ali', 'Hamid', 'Qaiser'];
function show_magicians(magician_name) {
    for (var i = 0; i < magician_name.length; i++) {
        console.log(magician_name[i]);
    }
}
function make_great(magician_name) {
    var new_array = __spreadArray([], magician_name, true);
    for (var i = 0; i < new_array.length; i++) {
        new_array[i] = "Hello " + new_array[i];
        console.log(new_array[i]);
    }
}
//nomal magicians
show_magicians(magicians);
//change copied array
make_great(magicians);
//original array hasn't changed
show_magicians(magicians);
