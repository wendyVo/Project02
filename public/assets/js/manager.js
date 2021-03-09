document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded! 🚀");

    // delete Employee
    const deleteEmp = document.querySelectorAll(".deleteEmp");
    console.log(deleteEmp);
    if (deleteEmp) {
        deleteEmp.forEach((emp) => {
            emp.addEventListener("click", (e) => {
                e.preventDefault();
                console.log("clicked");
                const id = emp.getAttribute("data-id");
                console.log(id);

                fetch(`/api/employees/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((response) => {
                    alert(`${response.firstName} ${response.lastName} removed employee successly`);
                    window.location.replace("/manager");
                });
            });
        });
    };

    //add new employee functionality
    const addEmpBtn = document.getElementById("addEmpBtn");

    if (addEmpBtn) {
        addEmpBtn.addEventListener("click", e => {
            e.preventDefault();
            console.log(addEmpBtn);
            alert("btn clicked")
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
    };

});