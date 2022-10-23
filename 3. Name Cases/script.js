let name = "ahmad";

console.log(name.toUpperCase());
console.log(name.toLowerCase());

function tittleCase(name){
    name = name.toLowerCase();
    name = name.split(" ");
    for(let n = 0; n<name.length; n++)
    {
        name[n] = name[n].charAt(0).toUpperCase() + name[n].slice(1);
    }
    return name.join(" ");
}

console.log(tittleCase(name));