// Wait until the DOM is loaded to start the script
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // Get the html elements from the waiter.handlebar
  const tableBtn = document.querySelectorAll(".tableBtn");
  const tableOrder = document.getElementById("tableOrder");
  const dish = document.querySelectorAll(".dish");

  // Make the table buttons clickable
  tableBtn.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      console.log("clicked");
      const tableId = parseInt(e.target.textContent);
      console.log(tableId);
      hideShow();
      getDishes(tableId);
    });
  });

  // Make the dishes clickable
  dish.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      console.log("clicked");
      const dishId = parseInt(e.target.getAttribute("data-id"));
      console.log(dishId);
    });
  });

  // Funtion to display or hide a table order
  const hideShow = () => {
    if (tableOrder.className === "showing") {
      tableOrder.className = "hidden";
      tableOrder.setAttribute("style", "display: none");
    } else if ((tableOrder.className = "hidden")) {
      tableOrder.className = "showing";
      tableOrder.setAttribute("style", "display: block");
    }
  };

  const getDishes = item => {
    fetch(`/waiter/table/Order/${item}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };

  // Function to get all the dishes on the menu
  // const getDishes = () => {
  //   fetch("/api/dishes", {
  //     method: "GET"
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     });
  // };

  // Function to order a dish for a table
});
