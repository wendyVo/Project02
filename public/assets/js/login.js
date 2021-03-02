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

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  const pinNumber = [];
  const submitPin = document.getElementById("pinSubmit");

  const pin1 = document.getElementById("first");
  const pin2 = document.getElementById("mid1");
  const pin3 = document.getElementById("mid2");
  const pin4 = document.getElementById("last");

  const checkPinNumber = () => {
    pinNumber.push(pin1.value, pin2.value, pin3.value, pin4.value);
    console.log(pinNumber);
  };

  submitPin.addEventListener("click", e => {
    e.preventDefault();
    console.log("clicked");
    if (
      isNaN(pin1.value) ||
      isNaN(pin2.value) ||
      isNaN(pin3.value) ||
      isNaN(pin4.value)
    ) {
      return;
    }
    checkPinNumber();
    console.log(pinNumber);
  });
  getPinNumber();
});

