//tworzymy dwie petle jedna tworzy divy druga tworzy spany w srodku
// jak klikamy itema to ma sie zmienic kolor itema. jak klikniemy w to samo miejsce to oprocz koloru ma sie zmienic cena, a jak kliniemy drugi raz to ma sie zmienic na 0 zlotych lub zniknac.

let div = document.querySelector("#show");
let result = document.querySelector("#result");
let row = 10;
let price = 0;
let didFunction = false;

for (i = 0; i < row; i++) {
  let item = document.createElement("div");
  div.appendChild(item);
  for (j = 0; j < row; j++) {
    let span = document.createElement("span");
    let spanText = document.createTextNode(`rz${i + 1}m${j + 1}   `);
    span.appendChild(spanText);
    item.appendChild(span);
  }
}

// oblicz ile biletów zostalo wybrane: trzeba to zrobic dynamicznie by on dodawal ile itemow ma zmienioną klasę

result.innerHTML = `Suma do zapłaty: ${price} PLN`;
// function counttickets() {
//search in each item is any added class
let spans = document.querySelectorAll("div span");
console.log(spans);

spans.forEach(function(span) {
  span.addEventListener("click", function() {
    // zrobiony jest taki toggle za pomoca ifa
    if (span.style.color == "green") {
      price = price - 15;
      span.style.color = "black";
      result.innerHTML = `Suma do zapłaty: ${price} PLN`;
    } else {
      price = price + 15;
      span.style.color = "green";
      result.innerHTML = `Suma do zapłaty: ${price} PLN`;
    }
    console.log(price);
  });
});

//teraz mamy zrobic dane logowania, porównac je do bazy danych . dwie funkcje sprawdzenie poprawnosci a druga to jest przejscie do kolejnej strony (ta funkcja open() wbudowana)
