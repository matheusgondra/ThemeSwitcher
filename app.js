const $label = document.querySelector("#toggleLabel");
const $imgIcon = document.querySelector("#icon");
const $body = document.querySelector("body");

let on = true;

const handleBackground = () => {
   $body.classList.toggle("on");
}

const handleIcon = () => {
   if(on) {
      $imgIcon.src = "./assets/moon.svg";
      $imgIcon.classList.remove("iconSun");
      $imgIcon.classList.add("iconMoon");
   } else {
      $imgIcon.src = "./assets/sun.svg";
      $imgIcon.classList.remove("iconMoon");
      $imgIcon.classList.add("iconSun");
   }
}

const handleButton = () => {
   handleIcon();
   if(on) {
      $label.classList.remove("toggleLabelOff");
      $label.classList.add("toggleLabelOn");
   } else {
      $label.classList.remove("toggleLabelOn");
      $label.classList.add("toggleLabelOff");
   }
}

const handleToggle = () => {
   handleBackground();
   handleButton();
   on = !on;
}

$label.addEventListener("click", handleToggle);