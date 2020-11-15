//function (2) that generates a random number, function used is dependent on user input saved from previous obtained during the call of protesterChoice.userChoiceFunct
function policeAffects() {
      if(forRandom === "a") {var randomNumber = Math.floor(Math.random() * 25) + 1;
      var policeResults;
      }
      else{var randomNumber = Math.floor(Math.random() * 5
      ) + 1;
      var policeResults; 
      }
      
      //function switch that parses (parse?) results of random function into results by case
  switch (randomNumber) {
    case 1:
      policeResults = "took a beat-down by police.";
      break;
    case 2:
      policeResults = "took a beat-down by state sponsored thugs.";
      break;
    case 3:
      policeResults = "got blasted with tear gas.";
      break;
    case 4:
      policeResults = "got blasted with blue dye infused fire hose spray.";
      break;
    case 5:
      policeResults = "got arrested.";
    default:
      
      //statement that parses results not which are not listed case statements
      policeResults = "came through unscathed.";
      break;
  }
  alert ("During your you protest you " + policeResults);
};