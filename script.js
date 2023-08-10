const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
  let today = new Date();
  let inputDate = new Date(document.getElementById("date-input").value);
  let birthMonth, birthDate, birthYear;

  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };
  let currentYear = today.getFullYear();
  let currenMonth = today.getMonth() + 1;
  let currenDate = today.getDate();

  leapChecker(currentYear);

  if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currenMonth && birthDetails.year == currentYear) ||
    (birthDetails.date > currenDate &&
      birthDetails.month == currenMonth &&
      birthDetails.year == currentYear)
  ) {
    alert("Baby on the way ;)");
    dispplayResult("-", "-", "-");
    return;
  }
  birthYear = currentYear - birthDetails.year;

  if (currenMonth >= birthDetails.month) {
    birthMonth = currenMonth - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = 12 + currenMonth - birthDetails.month;
  }

  if (currenDate >= birthDetails.date) {
    birthDate = currenDate - birthDetails.date;
  } else {
    birthMonth--;
    let days = months[currenMonth - 2];
    birthDate = days + currenDate - birthDetails.date;
    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }
  dispplayResult(birthDate, birthMonth, birthYear);
}

function dispplayResult(bDate, bMonth, bYear) {
  document.getElementById("years").textContent = bYear;
  document.getElementById("months").textContent = bMonth;
  document.getElementById("days").textContent = bDate;
}

function leapChecker(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
}
