let current_users = ["mas", "Luffy", "zoro", "nami", "sanji"];
let new_users     = ["luffy", "zoro", "marco", "ace", "dragon"];

let currentUsers    = current_users.map((user) => user.toLowerCase());
let newUsers = new_users.map((user) => user.toLowerCase());
for (let n = 0; n < newUsers.length; n++) {
    if (currentUsers.includes(newUsers[n])) {
        console.log(newUsers[n] + ' is already taken');
    } else {
        console.log(newUsers[n] + ' is available');
    }
}