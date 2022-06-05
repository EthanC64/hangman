var wordBank = ["computer", "victory", "boat", "apple", "sushi"];
var rand = Math.floor(Math.random() * wordBank.length);
var computerPick = wordBank[rand];
var computerPickArray = computerPick.split("");
var progress = "";
var guesses = "";

console.log(computerPick);

for (var i = 0; i < computerPickArray.length; i++) {
  progress += "_";
}

var populate = (progress) => {
  var template = "";

  for (var i = 0; i < progress.length; i++) {
    var progressTarget = progress[i];
    template += `<span> ${progressTarget} </span>`;
  }

  document.querySelector(".letters").innerHTML = template;
};

populate(progress);

document.addEventListener("keydown", (e) => {
  console.log("keyDown", e);
  var userPick = e.key.toLowerCase();
  guesses += userPick;

  var index = computerPickArray.findIndex((pick) => userPick === pick);
  console.log("index", index);

  var progressArray = progress.split("");

  for (var i = 0; i < computerPickArray.length; i++) {
    if (userPick === computerPickArray[i]) {
      progressArray[i] = computerPickArray[i];
    }
  }

  progress = progressArray.join("");

  populate(progressArray.join(""));

  document.querySelector(".letters-guessed").textContent = userPick;

  // key down
  for (var i = 0; i < progress.length; i++) {
    if (progress.includes("_")) {
      return;
    } else {
      document.querySelector(".end-game-message").textContent = "You win!";
    }
  }
});
