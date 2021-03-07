document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // const menu = document.querySelector(".dish");
  const tableBtn = document.querySelectorAll(".tableBtn");
  const tableOrder = document.getElementById("tableOrder");

  console.log(tableBtn);
  tableBtn.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      console.log("clicked");
      hideShow();
      // tableOrder.setAttribute("style", "display: none");
      // getDishes();
    });
  });

  const hideShow = () => {
    if (tableOrder.className === "showing") {
      tableOrder.className = "hidden";
      tableOrder.setAttribute("style", "display: none");
    } else if ((tableOrder.className = "hidden")) {
      tableOrder.className = "showing";
      tableOrder.setAttribute("style", "display: block");
    }
  };

  // const getDishes = () => {
  //   fetch("/api/dishes", {
  //     method: "GET",
  //     // headers: { "Content-Type:": "application/json" },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };
});
