/*
    prompt the user to type a flavor
*/
const userInput = prompt("Please enter a flavor from the options: vanilla, chocolate, strawberry");
const userInputString = userInput.split(",")

/*      //Spell checker for simple misspelled words. Maybe unneccessary? Still a WIP

const userInputStringCheck = userInput.split(",")
const userInputString = []
    
for (let i=0;i<userInputStringCheck;i++){
    if(userInputStringCheck = "vanilla" || "Vanilla" || "vanila" || "Vanila"){
        userInputString.push("vanilla")
    }else if(userInputStringCheck[i] = "chocolate"){
        userInputString.push("chocolate")
    }else if(userInputStringCheck[i] = "strawberry" || "strawbery"){
        userInputString.push("strawberry")
    }else if(userInputStringCheck[i] = "coffee" || "coffe" || "cofee" || "cofe" || "cafe"){
        userInputString.push("coffee")    
    }else{
        userInputString.push("Unknown Flavor")
    }
}strawberry,
*/


// Main code
const froyoFlavorList = {}  
for (let i=0;i<userInputString.length;i++){
    let flavor = userInputString[i]

    if (flavor in froyoFlavorList){
        froyoFlavorList[flavor] += 1
    }else{
        froyoFlavorList[flavor] = 1
    }
}
console.table(froyoFlavorList)
