export { updateBackground };
const backgroundColor = document.querySelector(".body");

function updateBackground(currentTime, sunrise, sunset) {
  if (currentTime > sunrise && currentTime < sunset) {
    backgroundColor.style.background =
      "linear-gradient(180deg, #62c2c8 0%, rgba(115, 238, 246, 0.16) 130%, rgba(118, 247, 255, 0) 150%)";
  } else {
    backgroundColor.style.background = "linear-gradient(180deg, #4B5C99 0%, rgba(98, 194, 200, 0) 100%)";
  }
}
