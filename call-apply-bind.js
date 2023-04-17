const menOne={
 
    name:"pratik",
    skill:"MERN",
    secret :function(a,b){
        return (
            this.skill = "Gaming"+" " +a+" "+b
        )
    }
}

menOne.secret("java","javascript")
console.log(menOne)


const menTwo={
    name:"Ranjeet",
    skill :"Android",
    
}
//men One ke secret method ko call krdo men two k liye 
menOne.secret.call(menTwo,"coding","cricket")
console.log(menTwo)


// *************************** Apply ************************

menOne.secret.apply(menTwo,["java","python"])
console.log(menTwo)

// *************************** Bind ************************
const mySecret = menOne.secret.bind(menTwo,"SaapSidi","ludo")
mySecret()
console.log(menTwo)
