function generateDay() {
  let inputMonth = document.querySelector('input[name="month"]:checked').value;
  let inputDate = document.querySelector('input[type="text"]').value;
  let day;
  let maxDaysInMonth;
  switch (inputMonth) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      maxDaysInMonth = 31;
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      maxDaysInMonth = 30;
      break;
    case "February":
      maxDaysInMonth = 28;
      break;
    default:
      maxDaysInMonth = -1;
      break;
  }

  if (inputDate < 1 || inputDate > maxDaysInMonth) {
    document.getElementById("result").innerHTML =
      "Invalid date for selected month";
    return;
  }
  switch (inputMonth) {
    case "January":
      day = inputDate % 7;
      break;
    case "February":
      day = ((inputDate % 7) + 3) % 7;
      break;
    case "March":
      day = ((inputDate % 7) + 4) % 7;
      break;
    case "April":
      day = inputDate % 7;
      break;
    case "May":
      day = ((inputDate % 7) + 2) % 7;
      break;
    case "June":
      day = ((inputDate % 7) + 5) % 7;
      break;
    case "July":
      day = inputDate % 7;
      break;
    case "August":
      day = ((inputDate % 7) + 3) % 7;
      break;
    case "September":
      day = ((inputDate % 7) + 6) % 7;
      break;
    case "October":
      day = ((inputDate % 7) + 1) % 7;
      break;
    case "November":
      day = ((inputDate % 7) + 4) % 7;
      break;
    case "December":
      day = ((inputDate % 7) - 1) % 7;
      break;
    default:
      day = "Invalid input";
      break;
  }

  switch (day) {
    case 1:
      document.getElementById("result").innerHTML = "Monday";
      break;
    case 2:
      document.getElementById("result").innerHTML = "Tuesday";
      break;
    case 3:
      document.getElementById("result").innerHTML = "Wednesday";
      break;
    case 4:
      document.getElementById("result").innerHTML = "Thursday";
      break;
    case 5:
      document.getElementById("result").innerHTML = "Friday";
      break;
    case 6:
      document.getElementById("result").innerHTML = "Saturday";
      break;
    case 0:
      document.getElementById("result").innerHTML = "Sunday";
      break;
    default:
      document.getElementById("result").innerHTML = "Invalid input";
      break;
  }
}
