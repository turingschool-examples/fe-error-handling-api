// Animal URL 
const animalsUrl = 'http://localhost:3001/api/v1/animals';

// ----- Query selectors
const animalsSection = document.querySelector('.js-animals');
const form = document.querySelector('.js-add-animal');
const animalIdForm = document.querySelector('.animal-id')

// ----- GET request 
const getAllAnimals = () => {
  fetch(animalsUrl)
  .then(response => response.json())
  .then(animals => addAnimalsToPage(animals));
}


//----- Post request 
const addAnimal = (newAnimal) => {
  fetch(animalsUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newAnimal)
  })
  .then(response => response.json())
  .then(animal => addAnimalToPage(animal));
}

getAllAnimals();
const addAnimalsToPage = animals => {
  animals.forEach(animal => {
    addAnimalToPage(animal);
  });
}
//Get one animal 
const getAnimal = (id) => {
  id = 10;
  fetch(`${animalsUrl}/${id}`)
  .then(response => response.json())
  .then(animals => addAnimalsToPage(animals));
}

const addAnimalToPage = animal => {
  animalsSection.innerHTML += `<p>${animal.name}</p>`;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newAnimal = {
    id: animalsSection.childElementCount + 1,
    name: formData.get('name'),
    diet: formData.get('diet'),
    fun_fact: formData.get('fun_fact')
  };
  addAnimal(newAnimal);
  e.target.reset();
});
// Here we want to see what happens if we send a wrong id to the server and implement 500 error. 
//since the server has only 4 animals if i send id 5 it should return a server error for me.
//add 5 and check your console for the internal server error.  
animalIdForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  let id = formData.get('animal-id')
  getAnimal(id)
  e.target.reset()
})
