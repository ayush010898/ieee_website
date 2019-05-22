var previousCardTabID = "branch-link-1";
var previousCardID = "branch-1";


let showCard = (currentCardTabID,currentCardID) => {
  //Change styles of  the card tabs.
  let currentCardTab = document.getElementById(currentCardTabID);
  let previousCardTab = document.getElementById(previousCardTabID);
  currentCardTab.classList.add("bg-gray-200");
  currentCardTab.classList.add("text-gray-900");
  currentCardTab.classList.remove("bg-gray-900");
  currentCardTab.classList.remove("text-white");
  previousCardTab.classList.add("bg-gray-900");
  previousCardTab.classList.add("text-white");
  previousCardTab.classList.remove("bg-gray-200");
  previousCardTab.classList.remove("text-gray-900");
  //Make the required div visible.
  let currentCard = document.getElementById(currentCardID);
  let previousCard = document.getElementById(previousCardID);
  previousCard.classList.add("hidden");
  currentCard.classList.remove("hidden");
  //Change the previousCard details.
  previousCardID = currentCardID;
  previousCardTabID = currentCardTabID;
}

//Add event listeners to the links.
document.getElementById("branch-link-1").addEventListener("click", () => {
  showCard('branch-link-1','branch-1');
});
document.getElementById("branch-link-2").addEventListener("click", () => {
  showCard('branch-link-2','branch-2');
});
document.getElementById("branch-link-3").addEventListener("click", () => {
  showCard('branch-link-3','branch-3');});
// document.getElementById("branch-link-1").onclick = showCard('branch-link-1','branch-1');
// document.getElementById("branch-link-2").onclick = showCard('branch-link-2','branch-2');
// document.getElementById("branch-link-3").onclick = showCard('branch-link-3','branch-3');