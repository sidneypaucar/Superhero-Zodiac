//==================== DOMAIN & API KEY ============================
const DOMAIN = "https://superheroapi.com/api.php/";
const API_KEY = "3232678883523279";

//=============== Making API Call Request =====================

//grabs the buttons id called search from the HTML file and places it into a variable called search that we can use later on.
const search = document.querySelector('#search');

//=================== Event Listener ============================

//When the "search" button is clicked, it triggers the following function.
search.addEventListener('click', (ev) => {
  //Prevents the page from refreshing whenever the search button is clicked.
  ev.preventDefault();
  //Holds the section of HTML that contains the class "superHero" and stores it in a variable called superheroChoice. 
  const superheroChoice = document.querySelector('.superHero').value;
  //stores the domain and personal api key along with one of the options the user chose, into a variable called url.
  const url = `https://www.superheroapi.com/api.php/3232678883523279/${superheroChoice}/image`;
  //Try/Catch function that fetches/gets the data stored in the variable named url. (follows a specific syntax order, a "Promise".)
  fetch(`${url}`)
    .then((results) => {
      return results.json();
    })
    .then((resultsJSON) => {
      console.log(resultsJSON);
      //runs the function below this one.
      displaySuperHero(resultsJSON);
    })
    //If the results arent returned, catch tells the user the error that occured.
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    });
});

//======== Displays data to the DOM ===================
//This function's job will be to display the data on the page.(As well as remove.)

//Called the parameter heroImages rather than "resultsJson"Line:26 because you can pass data as an arguement using a different name since they are isolated as separate code blocks. Basically Line:26 becomes the following line.(Line:40)
function displaySuperHero(heroImages) {
  //Places the section of HTML that contains the id "hero-images" into the variable heroImagesDiv.
  const heroImagesDiv = document.querySelector('#hero-images');

  //Setting heroImagesDiv to an empty string will delete/replace any information that's currently displayed on the page before displaying a new selection that the user made. (Basically removes the shown data from the DOM)
  heroImagesDiv.innerHTML = '';

  //Creates an image element onto the page and stores it in a heroTag.
  const heroTag = document.createElement('img');

  //Adds the piece of data (In our case, we are looking for the image url) to the heroTag.
  heroTag.src = heroImages.url;
  //styles the heroTag in the document
  heroTag.style.width = '75%';
  //adds the new value of the heroTag to the DOM to be displayed.
  heroImagesDiv.append(heroTag);
}

