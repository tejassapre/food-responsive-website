setInterval(updateTime, 1000);
function updateTime() {
  time.innerHTML = new Date();
}

document.querySelector(".submit-button").addEventListener("click", () => {
  console.log("submit button clicked");
});
