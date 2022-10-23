function car(manufucturer, model, ...args){
    return{
        manufucture: manufucturer,
        model: model, 
        args: args
    }
}

console.log(car("Honda", 2023, "Black"));
console.log(car("Royal Rolyce - Phantom", 2017, "Belladonna Purple", "Auto Transmission", "5000 RPM"));