document.addEventListener("DOMContentLoaded", event => {
  if (event) {
    console.info("DOM loaded");
  }

  const footerText = document.querySelector(".navbar-text");
  footerText.textContent = dayjs().format("dddd, MMMM D, YYYY h:mm A");

  const logOutBtn = document.getElementById("logOut");

  logOutBtn.addEventListener("click", e => {
    e.preventDefault();
    window.location.replace("/");
  });
});
