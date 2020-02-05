//function displays greeting, name prompt and stores/retrieves data as localstorage on the browser running this webap plication 
function intro() {
    
    //gets var person from local storage
    var person = localStorage.getItem("name");
    
    //function that determines if this web application has saved a string for var person during a prior running: if yes displays an alert message, if no calls function userNamePrompt
    function savedName() {
        if (person == null) {
            userNamePrompt()} 
        else {
            alert (person + " – there you are! It looks like you are back to play \"SAR–EWGCOM\" again, this game must be near and dear to your heart.");
        }
    }
    
    //function that prompts user for their name and displays results depending on user input
    function userNamePrompt() {
        
        var person = prompt("Please enter your name:");
        
        //saves var person into localstorage
        localStorage.setItem("name", person);
        if (person == null || person == "") {
            alert ("That's not a name. Game over, you lose...") + Enviroment.Exit();
        } else {
            alert ("Alright \"" + person + "\"! You at least entered some text when prompted, looks like you can handle what's next.");
        }
    }
    savedName();
};