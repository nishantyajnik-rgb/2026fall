const heading = document.getElementById("main-heading");
const button = document.getElementById("change-btn");
let isChanged = false;

function togglePageContent() 
{
  if (!isChanged) 
  {
    heading.textContent = "You did it! The text and background color changed!";
    heading.style.color = "#1c7038";
    document.body.style.backgroundColor = "#3498db";
    button.textContent = "Reset";
    isChanged = true;
  } 
  else
  {
    heading.textContent = "Click the button to change this text and color!";
    heading.style.color = "#000000";
    document.body.style.backgroundColor = "#f4f4f9";
    button.textContent = "Click Me";
    isChanged = false;
  }
}

button.addEventListener("click", togglePageContent);