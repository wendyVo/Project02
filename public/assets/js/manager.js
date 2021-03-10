document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  ///////////EMPLOYEE section in Manager Page///////////

  // delete Employee
  const deleteEmp = document.querySelectorAll(".deleteEmp");
  console.log(deleteEmp);
  if (deleteEmp) {
    deleteEmp.forEach(emp => {
      emp.addEventListener("click", e => {
        e.preventDefault();
        console.log("clicked");
        const id = emp.getAttribute("data-id");
        console.log(id);

        fetch(`/api/employees/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(() => {
          alert("The employee has been removed successfully!!");
          window.location.replace("/manager");
        });
      });
    });
  }

  //add new employee functionality
  const addEmpBtn = document.getElementById("addEmpBtn");

  if (addEmpBtn) {
    addEmpBtn.addEventListener("click", e => {
      e.preventDefault();
      console.log(addEmpBtn);
      const newEmployee = {
        firstName: $("#firstName")
          .val()
          .trim(),
        lastName: $("#lastName")
          .val()
          .trim(),
        email: $("#email")
          .val()
          .trim(),
        phone: $("#phone")
          .val()
          .trim(),
        pinNumber: $("#pinNumber")
          .val()
          .trim(),
        position: $("#position")
          .val()
          .trim(),
        managerId: $("#managerId")
          .val()
          .trim()
      };
      console.log("this is " + newEmployee);
      fetch("/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
      })
        .then(() => {
          alert("Added employee successly");
          window.location.replace("/manager");
        })
        .catch(err => console.error(err));
    });
  }

  ///////////MENU section in Manager Page///////////
  //add new dish functionality
  const addDishBtn = document.getElementById("addDishBtn");

  if (addDishBtn) {
    addDishBtn.addEventListener("click", e => {
      e.preventDefault();
      console.log(addDishBtn);
      const newDish = {
        title: $("#title")
          .val()
          .trim(),
        price: $("#price")
          .val()
          .trim(),
        isReady: $("#isReady")
          .val()
          .trim()
      };
      fetch("/api/newDishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newDish)
      })
        .then(() => {
          alert("Added dish successfully");
          window.location.replace("/manager/viewDish");
        })
        .catch(err => console.error(err));
    });
  }

  // delete Dish
  const deleteDish = document.querySelectorAll(".deleteDish");
  console.log(deleteDish);
  if (deleteDish) {
    deleteDish.forEach(dishes => {
      dishes.addEventListener("click", e => {
        e.preventDefault();
        console.log("clicked");
        const id = dishes.getAttribute("data-id");
        console.log(id);

        fetch(`/api/dish/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(() => {
          alert("The dish has been removed successfully!!");
          window.location.replace("/manager/viewDish");
        });
      });
    });
  }
  ///////////INGREDIENT section in Manager Page///////////
  //add new dish functionality
  const addIngredientBtn = document.getElementById("addIngredientBtn");

  if (addIngredientBtn) {
    addIngredientBtn.addEventListener("click", e => {
      e.preventDefault();
      console.log(addIngredientBtn);
      const newIngredient = {
        name: $("#name")
          .val()
          .trim(),
        quantity: $("#quantity")
          .val()
          .trim(),
        minimumQuantity: $("#minimumQuantity")
          .val()
          .trim()
      };
      fetch("/api/newIngredients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newIngredient)
      })
        .then(() => {
          alert("Added ingredient successfully");
          window.location.replace("/manager/viewIngredient");
        })
        .catch(err => console.error(err));
    });
  }
});
