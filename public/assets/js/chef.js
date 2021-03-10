document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // Get the html elements from the waiter.handlebar
  const orderedDish = document.querySelectorAll(".orderedDish");

  // Make the dishes clickable to change the status from not ready to ready
  orderedDish.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      console.log("clicked");
      const id = e.target.getAttribute("data-id");
      fetch(`/api/chef/ready/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          location.reload();
        });
    });
  });
});
