// Wait until the  dom is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // Variable to store the pin number
  const pinNumber = [];

  // Variables to get the html elements
  const submitPin = document.getElementById("pinSubmit");
  const pin1 = document.getElementById("first");
  const pin2 = document.getElementById("mid1");
  const pin3 = document.getElementById("mid2");
  const pin4 = document.getElementById("last");

  // Function to validate the pin number
  submitPin.addEventListener("click", e => {
    e.preventDefault();
    console.log("clicked");
    // Check if a value was entered
    if (!pin1.value || !pin2.value || !pin3.value || !pin4.value) {
      window.location.replace("/");
    }
    // Check if a number not a letter was entered
    if (
      isNaN(pin1.value) ||
      isNaN(pin2.value) ||
      isNaN(pin3.value) ||
      isNaN(pin4.value)
    ) {
      window.location.replace("/");
    }
    // Call the functions to store the pin and login the user to the correct page
    storePinNumber();
    loginUser(pinNumber.join(""));
    console.log(pinNumber);
  });

  // Function to store the pin entered by the User
  const storePinNumber = () => {
    if (pinNumber.length === 0) {
      pinNumber.push(pin1.value, pin2.value, pin3.value, pin4.value);
    } else {
      pinNumber.length = 0;
      pinNumber.push(pin1.value, pin2.value, pin3.value, pin4.value);
      console.log(pinNumber);
    }
  };

  // Function to send the user to the correct employee page depending on their position
  const loginUser = pin => {
    console.log("Get loginUser is getting called");
    fetch(`/api/login/${pin}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(pinNumber.join(""));
        if (data.length === 0) {
          window.location.replace("/");
        } else {
          if (data[0].pinNumber === Number(pinNumber.join(""))) {
            console.log("Log this employee in please");
            window.location.replace(`/${data[0].position}`);
          }
        }
      });
  };
});

