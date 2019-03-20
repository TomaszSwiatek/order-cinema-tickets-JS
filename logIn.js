var mydata = JSON.parse(data);
// alert(mydata[0].name);  //checks - is fetching data

var liczba = Object.keys(mydata).length; //we take length to iterate on each.
// console.log(`tablica imion: ${mydata[0].name}`);

//trzeba stworzyc input i button ktory sprawdzic wartosc inputa.
const BUTTON = document.querySelector("#button");

let found = false;

BUTTON.addEventListener("click", function() {
  //input value musi byc tutaj - wewnatrz inaczej nie dziala
  let inputLoginValue = document.querySelector("#name").value;
  let inputPasswordValue = document.querySelector("#password").value;

  //   console.log(`to jest imie: ${inputNameValue}`);
  //iterujemy po jsonie - imionach by znaleźć czy jest takie jak z inputa:
  mydata.forEach(element => {
    if (
      element.login === inputLoginValue &&
      element.password === inputPasswordValue
    ) {
      found = true;
    }
  }); //end forEach
  if (found) {
    window.open("chooseSeats.html", "_self");
  } else {
    console.log("incorrect login or password, try again.");
    document.querySelector("#message").innerHTML =
      "incorrect login or password, try again.";

    //show message
  }
  console.log(found);
});
