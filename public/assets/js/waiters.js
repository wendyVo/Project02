document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // const menu = document.querySelector(".dish");
  const tableBtn = document.querySelector(".tableBtn");

  tableBtn.addEventListener("click", e => {
    e.preventDefault();
    console.log("clicked");
    getDishes();
  });

  const getDishes = () => {
    fetch("/api/dishes", {
      method: "GET"
      // headers: { "Content-Type:": "application/json" },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };
});
