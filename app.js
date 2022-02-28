const $label = document.querySelector("#toggleLabel");
const $imgIcon = document.querySelector(".icon");
const $input = document.querySelector("#toggle");
const $body = document.querySelector("body");



$label.addEventListener("click", () => {
   if($input.checked) {
      $body.style.backgroundColor = "var(--dark)";
   } else {
      $body.style.backgroundColor = "var(--light)"
   }
})