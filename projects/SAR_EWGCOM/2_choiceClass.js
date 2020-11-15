//class declaration of ChoiceClass
class ChoiceClass{
  
  //instantiation of ChoiceClass via constructor method
  constructor(promptOne, alertOne, alertTwo, alertThree, alertFour) {
    this.promptOne = promptOne;
    this.alertOne = alertOne;
    this.alertTwo = alertTwo;
    this.alertThree = alertThree;
    this.alertFour = alertFour;
    }
    
    //main user choice function used throughout this web applicatipon
    userChoiceFunct(){
      input = prompt(this.promptOne)
      if (input === null || input === "") {
        alert (this.alertOne) + Environment.Exit(0);
      } else if (input === "a" || input === "b" || input === "c") {
        alert (this.alertTwo);
      } else if (input === "Wan Chai" || input === "Tsuen Wan" || input === "any MRT station" || input === "any police station" || input === "Sham Shui Po") {
        alert (this.alertThree);
      }
      else { 
        alert (this.alertFour) + Environment.Exit(0);
    }     
  }
};