// Pobieramy listę wszystkich elementów li.item
const categoriesList = document.querySelectorAll('ul#categories li.item');

// Liczymy liczbę kategorii
const numberOfCategories = categoriesList.length;
console.log(`Liczba kategorii: ${numberOfCategories}`);

// Dla każdej kategorii wyświetlamy tytuł i liczbę elementów wewnątrz
categoriesList.forEach((category) => {
  const title = category.querySelector('h2').textContent;
  const items = category.querySelectorAll('li').length;
  console.log(`Kategoria: ${title} (${items} elementów)`);
});
