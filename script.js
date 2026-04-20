/* this code was baced on :https://codehuntersharath.medium.com/how-to-create-a-age-calculator-in-html-css-javascript-calculate-age-from-date-of-birth-4367dca75feb */
const dob = new Date("2005-07-27");
const today = new Date();

let years = today.getFullYear() - dob.getFullYear();
let months = today.getMonth() - dob.getMonth();
let days = today.getDate() - dob.getDate();

if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
if (months < 0) { years--; months += 12; }

document.getElementById("result").innerText = `AGE : ${years}`;