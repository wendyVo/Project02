document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // Get the html elements from the waiter.handlebar
  const menuDish = document.querySelectorAll(".menuDish");

  // Make the dishes clickable to change the status from not ready to ready
  menuDish.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      console.log("clicked");
      const id = e.target.getAttribute("data-id");
      const ready = e.target.getAttribute("data-status");
      const readyDish = {
        id: parseInt(id),
        isReady: "true"
      };
      console.log(readyDish);
      console.log("This dish status is " + ready);
      if (ready === "false") {
        console.log("if statement working");
        e.target.setAttribute("data-status", "true");
        console.log(e.target);
        // fetch("/api/dishes/:id", {
        //   method: "PUT",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify(readyDish)
        // }).then(response => {
        //   if (response.ok) {
        //     console.log(`the dish with the id: ${id} is ready`);
        //     // window.location.replace("/chef");
        //   } else {
        //     alert("something went wrong!");
        //   }
        // });
      }
    });
  });
});
