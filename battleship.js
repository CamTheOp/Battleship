var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while (isSunk == false) {
    guess = prompt("Read! Aim! Fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid number.");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("WE'RE HIT!");
            hits = hits + 1;
        if (hits == 3) {
            isSunk = true;
            alert("You sank my battleship!");
            }
        } else {
            alert("MISS!")
        }
    }   
}
var accuracy = (3/guesses) * 100;
var stats = "You Took " + guesses + " guesses to sink my battleship, " + "which means your accuracy was " + accuracy + "%!!!";
    alert(stats);

if(accuracy > 60) {
    alert("What a strategist!")
} else {
    alert("Wow that a lot of misses!")
}
    