function addHeading(type, headingText) {
  const heading = document.createElement(type);
  heading.innerText = headingText;
  heading.classList.add(type == "h1" ? "heading-1" : "heading-2");
  document.body.appendChild(heading);
}

const fruits = ["Äpple", "Banan", "Apelsin", "Klementin", "Avocado", "Tomat", "Plommon"];
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

addHeading("h1", "Övning 3");

addHeading("h2", "Frukter");

for (let i = 0; i < fruits.length; i++) {
  const fruit = document.createElement("h3");
  document.body.appendChild(fruit);

  fruit.innerText = fruits[i];

  if (fruits[i] == "Banan") {
    fruit.style.backgroundColor = "yellow";
  } else if (fruits[i] == "Apelsin") {
    fruit.style.backgroundColor = "orange";
  } else if (fruits[i] == "Äpple") {
    fruit.style.backgroundColor = "red";
  }
}

addHeading("h2", "Nummer 1");

const hues = [12, 72, 192, 52, 6, 300, 210, 128, 42, 102];

for (let i = 0; i < hues.length; i++) {
  console.log(`Hue ${i + 1}`, hues[i]);
}

for (let i = 0; i < hues.length; i++) {
  const hueElem = document.createElement("h3");
  document.body.appendChild(hueElem);
  hueElem.innerText = `Nyans ${hues[i]}`;

  let bglight = hues[i] > 180 ? 80 : 20;
  let textLight = 100 - bglight;

  hueElem.style.backgroundColor = `hsl(${hues[i]}, 100%, ${bglight}%)`;
  hueElem.style.color = `hsl(100, 0%, ${textLight}%)`;
}

addHeading("h2", "Varannan");

const values = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Dolore", "consectetur"];

for (let i = 0; i < values.length; i++) {
  const valueElem = document.createElement("h3");
  document.body.appendChild(valueElem);
  valueElem.innerText = values[i];

  if (i % 2 == 0) {
    valueElem.style.border = "2px solid lightsalmon";
  } else {
    valueElem.style.fontSize = "1.5em";
  }
}

addHeading("h2", "Nummer 2");

const numbers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 511, 1023, 2048, 4096, 8192, 16384, 32768];

for (let i = 0; i < numbers.length; i++) {
  const numberElem = document.createElement("h3");
  document.body.appendChild(numberElem);

  if (numbers[i] % 2) {
    numberElem.innerText = `${numbers[i]} är ett udda tal`;
    numberElem.style.backgroundColor = "lightsalmon";
  } else {
    numberElem.innerText = `${numbers[i]} är ett jämt tal`;
    numberElem.style.backgroundColor = "lightseagreen";
  }
}

addHeading("h2", "Generera mening");

const sentenceFirst = ["Bordet", "Bob", "Jag", "Han", "Hon"];
const sentenceSecond = ["springer", "hoppar", "jagar", "skriver", "övar"];
const sentenceThird = ["inte", "dåligt", "vargar", "långsamt", "javascript"];

// Generera 10 meningar (med livet)
for (let i = 0; i < 10; i++) {
  const sentenceElem = document.createElement("h3");
  document.body.appendChild(sentenceElem);

  // Starta om från början ifall arrayen inte innehåller nog med element
  let idx1 = i % sentenceFirst.length;
  let idx2 = i % sentenceSecond.length;
  let idx3 = i % sentenceThird.length;

  sentenceElem.innerText = `${sentenceFirst[idx1]} ${sentenceSecond[idx2]} ${sentenceThird[idx3]}.`;
  console.log(sentenceElem.innerText);
}

addHeading("h2", "Utmaning - användarnamn");

const importantNames = ["Clara", "Guido", "Alrik"];
const names = ["Signe", "Noura", "Alrik", "Elias", "Maja", "Trung", "Dalya", "Clara", "Sergio", "Bianca", "Guido", "Soraya"];

for (let i = 0; i < names.length; i++) {
  const nameElem = document.createElement("h3");
  document.body.appendChild(nameElem);

  nameElem.innerText = names[i];

  // Om detta namn finns i important-arrayen med, ändra styling
  if (importantNames.includes(names[i])) {
    nameElem.style.fontWeight = "bold";
    nameElem.style.color = "black";
  }
  else {
    nameElem.style.color = "grey";
    nameElem.style.fontWeight = "400";
  }
}

addHeading("h2", "Utmaning - Generera mening");

const seedFirst = ["Bordet", "Bob", "Jag", "Han", "Hon"];
const seedSecond = ["springer", "hoppar", "jagar", "skriver", "övar"];
const seedThird = ["inte", "dåligt", "vargar", "långsamt", "javascript"];

// Generera 10 meningar (med livet)
for (let i = 0; i < 10; i++) {
  const sentenceElem = document.createElement("h3");
  document.body.appendChild(sentenceElem);

  // Starta om från början ifall arrayen inte innehåller nog med element
  let idx1 = Math.floor(Math.random() * seedFirst.length);
  let idx2 = Math.floor(Math.random() * seedSecond.length);
  let idx3 = Math.floor(Math.random() * seedThird.length);

  sentenceElem.innerText = `${seedFirst[idx1]} ${seedSecond[idx2]} ${seedThird[idx3]}.`;
  console.log(`${idx1}|${idx2}|${idx3}`, sentenceElem.innerText);
}
