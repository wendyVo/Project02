// const getIngredientsGreater = () => {
//   console.log("Get ingredients greater minimumQuantity");
//   fetch("/api/ingredients", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       res.render("ingredients", data);
//       for (let i = 0; i < data.length; i++) {
//         console.log("consoloe log data" + data[i].name);
//       }
//     })
//     .catch(error => console.log(`error:, ${error}`));
// };

// const getIngredientsless = () => {
//   console.log("Get ingredients less  or equal minimumQuantity");
//   fetch("/api/ingredient", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       for (let i = 0; i < data.length; i++) {
//         console.log("consoloe log data" + data[i].name);
//       }
//     })
//     .catch(error => console.log(`error:, ${error}`));
// };

// getIngredientsGreater();
// getIngredientsless();
