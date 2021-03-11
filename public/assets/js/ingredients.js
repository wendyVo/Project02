document.addEventListener("DOMContentLoaded", event => {
  if (event) {
    console.info("DOM loaded");
  }

  const orderBtn = document.querySelectorAll(".orderButton");

  homeBtn.setAttribute("href", "manager");

  // button "order "for all the low stock ingredients
  orderBtn.forEach(button => {
    button.addEventListener("click", e => {
      console.log("test");
      // Grabs the id of the element that goes by the name, "id"
      const id = e.target.getAttribute("data-id");
      const newQuantity = e.target.getAttribute("data-quantity");
      const newStock = {
        id: id,
        quantity: newQuantity
      };
      fetch(`/api/ingredients/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newStock)
      }).then(response => {
        if (response.ok) {
          console.log(`the ingredient with the id: ${id} reordered`);
          window.location.replace("/ingredients");
        } else {
          alert("something went wrong!");
        }
      });
    });
  });
});
