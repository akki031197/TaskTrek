function refreshPage() {
  location.reload();
}
function displayDate() {
  var today = new Date();
  let date = today.toString().split(" ");
  document.querySelector("#date").innerHTML =
    date[0] + ", " + date[1] + " " + date[2];
  console.log(date);
}

// function displayDate() {
//   var today = new Date();

//   var options = { weekday: "long", month: "short", day: "numeric" };
//   var formattedDate = today.toLocaleDateString(undefined, options);

//   document.getElementById("date").textContent = formattedDate;
// }
