var usernames = ['Hassan', 'Ali', 'Obaid', 'admin', 'Yasir'];
if (usernames.length == 0) {
    console.log('We need to find some users');
}
else {
    for (var i = 0; i < usernames.length; i++) {
        if (usernames[i] === 'admin') {
            console.log("Hello ".concat(usernames[i], ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(usernames[i], ", thank you for logging in again"));
        }
    }
}
//test after removing all the users fro an array
var usernames1 = [];
if (usernames1.length == 0) {
    console.log('We need to find some users');
}
else {
    for (var i = 0; i < usernames1.length; i++) {
        if (usernames1[i] === 'admin') {
            console.log("Hello ".concat(usernames1[i], ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(usernames1[i], ", thank you for logging in again"));
        }
    }
}
