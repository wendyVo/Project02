// Wait until the DOM is loaded to start the script
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // Get the html elements from the waiter.handlebar
  const tableBtn = document.querySelectorAll(".tableBtn");
  const orderTitle = document.querySelectorAll(".orderTitle");
  const orderBody = document.querySelectorAll(".orderBody");
  const menuDish = document.querySelectorAll(".menuDish");
  const orderedDish = document.querySelectorAll(".orderedDish");
  const tables = document.querySelectorAll(".table");

  let tableId = "";
  let dishBelongsTo = "";
  let toShow = "";

  //Function to hide the dish once it is served -- needs update route
  orderedDish.forEach((dish) => {
    dish.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("clicked");
      const orderedDishId = parseInt(e.target.getAttribute("data-id"));
      removeDishes(tableId, orderedDishId);
      dish.textContent = "";
    });
  });

  // Make the table buttons clickable
  tableBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      orderTitle.forEach((title) => {
        title.setAttribute("style", "display: none");
      });
      orderBody.forEach((item) => {
        item.setAttribute("style", "display: none");
      });
      console.log("clicked");
      tableId = parseInt(e.target.textContent);
      console.log(tableId);
      for (i = 0; i < orderedDish.length; i++) {
        dishBelongsTo = parseInt(orderedDish[i].getAttribute("data-tableId"));
        if (tableId === dishBelongsTo) {
          toShow = document.querySelectorAll(`.order${tableId}`);
          toShow.forEach((data) => {
            data.setAttribute("style", "display: block");
          });
        }
        getDishes(tableId);
      }
    });
  });

  //Function to hide the dish once it is served -- needs update route
  tables.forEach((table) => {
    table.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("clicked");
      const tableToUpdateId = parseInt(e.target.getAttribute("data-id"));
      console.log(tableToUpdateId);
      console.log(e.target.className);
      const dataToUpdate = {
        id: tableToUpdateId,
        isAvailable: false,
        updatedAt: "9999-12-31 23:59:59",
      };
      if (e.target.className === "table availabletrue") {
        tableTaken(tableToUpdateId, dataToUpdate);
      } else {
        tableFree(tableToUpdateId, dataToUpdate);
      }
    });
  });
  // Make the dishes clickable to order a dish
  menuDish.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("clicked");
      const dishId = parseInt(e.target.getAttribute("data-id"));
      console.log(dishId);
      orderDishes(tableId, dishId);
    });
  });

  //Function to get the dishes ordered by a table
  const getDishes = (item) => {
    fetch(`/waiter/table/Order/${item}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  //Function to order Dishes
  const orderDishes = (table, dish) => {
    fetch(`api/table/${table}/add-dish/${dish}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  // Function to remove a dish
  const removeDishes = (table, dish) => {
    fetch(`api/table/${table}/remove-dish/${dish}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  // Function to show that the table is not available
  const tableTaken = (id, availability) => {
    fetch(`/api/table/not-available/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(availability),
    }).then((response) => {
      if (response.ok) {
        console.log(`table ${id} is taken`);
        // window.location.replace("/waiter");
      } else {
        alert("something went wrong!");
      }
    });
  };

  // Function to show the table is available
  const tableFree = (id, availability) => {
    fetch(`/api/table/available/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(availability),
    }).then((response) => {
      if (response.ok) {
        console.log(`table ${id} is available`);
        // window.location.replace("/waiter");
      } else {
        alert("something went wrong!");
      }
    });
  };
});
