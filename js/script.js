let stylePrecedent = 1;
let styleSuivant = 2;
let total = 6;

document
  .querySelector("#button-merci")
  .addEventListener("click", (e) => changeLeStyle(styleSuivant));

function changeLeStyle(i) {
  var bonAnnivContent = document.getElementById("bon-anniv-content");
  var myImage = document.getElementById("my-image");

  document.getElementById("button-merci").innerHTML = "Merci";

  console.log(i);

  stylePrecedent = styleSuivant;
  while (styleSuivant == stylePrecedent) {
    (styleSuivant = Math.max(Math.floor(Math.random() * total) + 1)), total;
  }

  bonAnnivContent.className = "";

  if (i == 1) {
    // ComicSansMs
    bonAnnivContent.classList.toggle("comicSansMS");
    myImage.setAttribute("src", "images/x4jn98bw.bmp");
  }

  if (i == 2) {
    // Frite
    bonAnnivContent.classList.toggle("frite");
    myImage.setAttribute("src", "images/frite-costume.jpg");
  }

  if (i == 3) {
    // Lumon
    bonAnnivContent.classList.toggle("lumon");
    myImage.setAttribute("src", "images/lumon.png");
  }

  if (i == 4) {
    // Portal
    bonAnnivContent.classList.toggle("portal");
    myImage.setAttribute("src", "images/portal.png");
  }

  if (i == 5) {
    // Halflife
    bonAnnivContent.classList.toggle("halflife");
    myImage.setAttribute("src", "images/halflife.png");
    document.getElementById("button-merci").innerHTML = "(E)";
  }

  if (i == 6) {
    // Pouler
    bonAnnivContent.classList.toggle("pouler");
    myImage.setAttribute("src", "images/pouler.jpg");
    document.getElementById("button-merci").innerHTML = "@merci";
  }
}
