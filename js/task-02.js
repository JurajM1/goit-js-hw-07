// Pobieramy listę składników
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Pobieramy listę ul#ingredients
const ingredientsList = document.querySelector("ul#ingredients");

// Dla każdego składnika tworzymy element li
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
});

// Dodajemy całą listę li do ul#ingredients
ingredientsList.appendChild(...ingredientsList.querySelectorAll("li"));
