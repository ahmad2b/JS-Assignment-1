function sandwich(){
    console.log(`Your sandwich has the following items:`);
    for(let n = 0; n < arguments.length; n++)
    {
        console.log(arguments[n]);
    }
}

sandwich("cheese", "onions", "red chili", "mayo");
sandwich("cheese", "mayo");