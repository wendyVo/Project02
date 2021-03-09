document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");
  //add new employee functionality
  const addEmpBtn = document.getElementById("addEmpBtn");
  addEmpBtn.addEventListener("click", e => {
    e.preventDefault();

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

  //delete Employee Functionality
  const deleteEmp = document.getElementById("deleteEmp");

  deleteEmp.addEventListener("click", e => {
    e.preventDefault();
    alert("clicked");
    const id = e.target.parentElement("tr").getAttribute("data-id");
    console.log(id);

    $.ajax({
      method: "DELETE",
      url: `/api/employees/${id}`
    }).then(() => {
      alert("Removed employee successly");
      window.location.replace("/manager");
    });
  });
});
