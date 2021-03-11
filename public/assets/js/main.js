document.addEventListener("DOMContentLoaded", event => {
  if (event) {
    console.info("DOM loaded");
  }
  // Add the date and time to the footer
  const footerText = document.querySelector(".navbar-text");
  footerText.textContent = dayjs().format("dddd, MMMM D, YYYY h:mm A");

  // Get the navbar icons
  const logOutBtn = document.getElementById("logOut");
  const homeBtn = document.getElementById("home");
  const managerHomeBtn = document.getElementById("managerHome");

  // Logout on click
  logOutBtn.addEventListener("click", e => {
    e.preventDefault();
    window.location.replace("/");
  });

  // Back home on click
  homeBtn.addEventListener("click", e => {
    e.preventDefault();
    window.location.replace("/");
  });

  // Back to manager page on click
  managerHomeBtn.addEventListener("click", e => {
    e.preventDefault();
    window.location.replace("/manager");
  });
});
