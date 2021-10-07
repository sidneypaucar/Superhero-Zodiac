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

  const superheroChoice = document.querySelector('.superHero').value;
  const url = `https://www.superheroapi.com/api.php/3232678883523279/${superheroChoice}/image`;

  fetch(`${url}`)
    .then((results) => {
      return results.json();
    })
    .then((resultsJSON) => {
      console.log(resultsJSON);
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    });
});



//show superheror data
//create variabble