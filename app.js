const $label = document.querySelector("#toggleLabel");
const $imgIcon = document.querySelector("#icon");
const $input = document.querySelector("#toggle");
const $body = document.querySelector("body");

let isChecked = $input.checked;

const handleBackground = () => {
   // isChecked ? $body.style.backgroundColor = "var(--dark)" : $body.style.backgroundColor = "var(--light)";

   if(isChecked) {
      $body.style.backgroundColor = "var(--dark)"
   } else {
      $body.style.backgroundColor = "var(--light)";
   }
}

const handleIcon = () => {
   if (isChecked) {
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
   if(isChecked) {
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
}

$label.addEventListener("click", () => {
   isChecked = $input.checked;
   handleToggle();
})