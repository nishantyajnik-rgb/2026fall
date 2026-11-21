const body = document.body;
const btn = document.getElementById("transform-btn");
const badge = document.getElementById("badge");
const headline = document.getElementById("headline");
const subtext = document.getElementById("subtext");
const meme1Title = document.getElementById("meme1-title");
const meme1Desc = document.getElementById("meme1-desc");
const meme2Title = document.getElementById("meme2-title");
const meme2Desc = document.getElementById("meme2-desc");

let isNeon = false;

function toggleTheme() {
  isNeon = !isNeon;
  body.classList.toggle("neon-mode");

  if (isNeon) {
    badge.textContent = "OVERDRIVE // 3:00 AM";
    headline.textContent = "MAXIMUM MEME OVERLOAD";
    subtext.textContent =
      "No thoughts. Just deep-fried shitposts, cursed reaction images, and pure internet chaos.";
    meme1Title.textContent = "DEEP-FRIED DOGE";
    meme1Desc.textContent = "BOTTOM TEXT // LASER EYES ACTIVATED";
    meme2Title.textContent = "EVERYTHING IS ON FIRE";
    meme2Desc.textContent = "Send help. Scrolling since 2019.";
    btn.textContent = "Cool Down";
  } else {
    badge.textContent = "CURATED ARCHIVE // 2026";
    headline.textContent = "Internet Culture & Classic Memes";
    subtext.textContent =
      "A calm, well-organized repository of viral history, reaction images, and timeless digital humor.";
    meme1Title.textContent = "Doge (2013)";
    meme1Desc.textContent = "Such classic. Very calm. Much wow.";
    meme2Title.textContent = "This Is Fine (2016)";
    meme2Desc.textContent = "Sipping coffee in a totally normal room.";
    btn.textContent = "Enter Brainrot Mode";
  }
}

btn.addEventListener("click", toggleTheme);

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    toggleTheme();
  }
});