var current_users = ['Hassan', 'Ali', 'Obaid', 'admin', 'Yasir'];
var new_users = ['Haris', 'Ali', 'Dua', 'Kiran', 'Fatima'];
for (var i = 0; i < new_users.length; i++) {
    if (new_users.includes(current_users[i])) {
        console.log('person will need to enter a new username');
    }
    else {
        console.log('username is available');
    }
}
