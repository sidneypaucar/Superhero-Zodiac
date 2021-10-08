//-------------API KEY

const DOMAIN = "https://superheroapi.com/api.php/";
const API_KEY = "3232678883523279";
const baseURL = `${DOMAIN}${API_KEY}`;

//--------description of each superhero
const superheroDesc = [
  {
    name: "Wonder Woman", description: "Princess Diana"
  },
  {
    name: "Flash", description: "Fastest Man Alive"
  },
  {
    name: "Superman", description: "Strongest man alive"
  },
  {
    name: "Mr. Fantastic", description: "Genius Intellect"
  },
  {
    name: "Harley Quinn", description: "Joker partner"
  },
  {
    name: "Wolverine", description: "Logan"
  },
  {
    name: "Spider-Man", description: "Web Slinger"
  },
  {
    name: "Doctor Strange", description: "Mystic Arts"
  },
  {
    name: "Captain America", description: "Americas Pride"
  },
  {
    name: "Batman", description: "Worlds Greatest Detective"
  },
  {
    name: "Hal Jordan", description: "Green Lantern"
  },
];

//-----Event Listener
const search = document.querySelector('#search');

//-- API Call Request 
search.addEventListener('click', (ev) => {
  ev.preventDefault();
  console.log("the button was clicked");




  const superheroChoice = document.querySelector('.superHero').value;
  const url = `https://www.superheroapi.com/api.php/3232678883523279/${superheroChoice}/image`;



  fetch(`${url}`)
    .then((results) => {
      return results.json();
    })
    .then((resultsJSON) => {
      console.log(resultsJSON);
      displaySuperHero(resultsJSON);
    })

    .catch((error) => {
      console.log(`ERROR: ${error}`);
    });

});

//Appending the heroes to the DOM
const displaySuperHero = (heroImages) => {

  const heroImagesDiv = document.querySelector('#hero-images');

//Setting heroImagesDiv to an empty string will delete/replace any information that's currently displayed before displaying a new selection that the user made.
  heroImagesDiv.innerHTML = '';

  const heroTag = document.createElement('img');
  heroTag.src = heroImages.url;
  heroTag.style.width = '75%';
  heroImagesDiv.append(heroTag);
}

//Remove the shown heroes from the DOM
