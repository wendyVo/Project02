const pinNumber = 1234;

const getPinNumber = () => {
  // console.log('Get employee is getting called');
  fetch(`/api/employee/${pinNumber}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      window.location.replace(`/${data.position}`);
    })
    .catch(error => console.error("Error:", error));
};

// Get the link of the employee
getPinNumber();
