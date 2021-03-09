// Wait until the DOM is loaded to start the script
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // Get the html elements from the waiter.handlebar
  const tableBtn = document.querySelectorAll(".tableBtn");
  const orderTitle = document.querySelectorAll(".orderTitle");
  const orderBody = document.querySelectorAll(".orderBody");
  const menuDish = document.querySelectorAll(".menuDish");
  const orderedDish = document.querySelectorAll(".orderedDish");
  const readyDish = document.querySelectorAll(".readytrue");

  let tableId = "";
  let dishBelongsTo = "";

  //Function to hide the dish once it is served -- needs update route
  readyDish.forEach(dish => {
    dish.addEventListener("click", e => {
      e.preventDefault();
      console.log("clicked");
      dish.textContent = "";
    });
  });

  // Make the table buttons clickable
  tableBtn.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      console.log("clicked");
      tableId = parseInt(e.target.textContent);
      console.log(tableId);
      for (i = 0; i < orderedDish.length; i++) {
        dishBelongsTo = parseInt(orderedDish[i].getAttribute("data-tableId"));
        if (tableId === dishBelongsTo) {
          console.log(dishBelongsTo);
          orderTitle[i].setAttribute("style", "display: block");
          orderBody[i].setAttribute("style", "display: block");
        } else {
          orderTitle[i].setAttribute("style", "display: none");
          orderBody[i].setAttribute("style", "display: none");
        }
      }
      // hideShow();
      getDishes(tableId);
    });
  });

  // Make the dishes clickable
  menuDish.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      console.log("clicked");
      const dishId = parseInt(e.target.getAttribute("data-id"));
      console.log(dishId);
      orderDishes(tableId, dishId);
    });
  });

  // Function to display or hide a table order
  // const hideShow = (tableNumber) => {
  //   if (tableOrder.className === "showing") {
  //     tableOrder.className = "hidden";
  //     tableOrder.setAttribute("style", "display: none");
  //   } else if ((tableOrder.className = "hidden")) {
  //     tableOrder.className = "showing";
  //     tableOrder.setAttribute("style", "display: block");
  //   }
  // };

  //Function to get the dishes ordered by a table
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

  //Function to order Dishes
  const orderDishes = (table, dish) => {
    fetch(`api/table/${table}/add-dish/${dish}`, {
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
});
