const age = 64; 

if (age < 18){ 
    console.log("sorry, you are not old enough to enter the venue"); 
} 

else if (age < 21){ 
    console.log("You can enter, but you cannot drink"); 
}

else { 
    console.log("Come on in. You can drink."); 
}


if (age < 0) { 
    console.log("Error"); 
}

if (age === 21) { 
    console.log("Happy 21st birthday")
}

if (age % 2 !== 0 ){ 
    console.log("your age is odd!"); 
}

if (age % Math.sqrt(age) === 0){ 
    console.log("perfect square"); 
}

 
