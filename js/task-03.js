// Dane obrazów
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Pobieramy listę galerii
const galleryList = document.querySelector("ul.gallery");

// Tworzymy elementy <li> z <img> i dodajemy do listy galerii
const galleryItems = images.map((image) => {
  return `
    <li class="gallery-item">
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `;
});

// Dodajemy całą listę <li> do <ul>
galleryList.insertAdjacentHTML("beforeend", galleryItems.join(""));
