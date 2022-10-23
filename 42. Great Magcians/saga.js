let magician = ["Jadoon", "shapack", "Hooper", "luffy"];
function show_magicians(magician){
    for(let n = 0; n < magician.length; n++){
        console.log(magician[n]);
    }
}
show_magicians(magician);

function great_magacians(magician){
    for(let n = 0; n < magician.length; n++)
    {
        console.log(`Great ${magician[n]}`);
    }
}
great_magacians(magician);