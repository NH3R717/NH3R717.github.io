//function to capture user input based on results displayed to them by contained function for loop
function equipmentLoop() {
  alert(
    "Following this alert will be a list equipment you may use as a forceful protester. You will only be shown this list once, remember which piece of equipment you would like to use during your protest and enter that selection when prompted."
  );

  //array used in the for loop
  var equipment = [
    "Spray Paint",
    "Umbrella",
    "Brick",
    "Gas Mask",
    "Telegram",
    "Camera",
  ];

  //function for loop that displays equipment array elements as alert messages in this web application
  var i;
  for (i = 0; i < equipment.length; i++) {
    alert(equipment[i]);
  }
  equipmentInput = prompt("Enter your Equipment choice.");

  //function if else that validates user input matches one of the presented elements stored in equipment array
  if (equipmentInput == null || equipmentInput == "") {
    alert(
      "Alright now, you have to enter some text to play this game, you didn't do that. Game over, you lose..."
    ) + Environment.Exit();
  } else if (
    equipmentInput === "Spray Paint" ||
    equipmentInput === "Umbrella" ||
    equipmentInput === "Brick" ||
    equipmentInput === "Gas Mask" ||
    equipmentInput === "Telegram" ||
    equipmentInput === "Camera"
  ) {
    alert("You chose: " + equipmentInput);
  } else if (input === null || input === "") {
    alert(this.alertOne) + Environment.Exit(0);
  } else {
    alert(
      "That was not an equipment choice you were given. Game over, you lose..."
    ) + Environment.Exit(0);
  }
}
