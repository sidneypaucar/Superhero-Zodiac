#SuperHero Zodiac

https://sidneypaucar.github.io/Superhero-Zodiac/

##Description
 User selects his/her zodiac sign and is given a super hero with a similar sign.

 ##API and Data Sample

https://superheroapi.com/api/

```
{
    "response": "success",
    "id": "720",
    "name": "Wonder Woman",
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/807.jpg"
}
```

##WIREFRAMES

 https://www.figma.com/community/file/1028251869676249816/Superhero-Zodiac

##MVP 

- Build with HTML, CSS, and JavaScript.
- Style using Flexbox or Grid.
- Use fetch to make a request from the Superhero API and insert the retrieved data on to the DOM.
- Implement responsive design for a device using at least one media query/breakpoint.

##POST MVP

- Add a slideshow of heroes in the main page that cycles every 3 seconds. Add links with some suggested reads.

##TIMEFRAME

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Formatting | H | 3hrs| 6hrs | 6hrs |
| Javascript Formatting | H | 3hrs| 6hrs | 6hrs |
| Retreiving Proper API Data | H | 3hrs| 12hrs | 12hrs |
| Adding Event Listener | H | 1hr| 3hrs | 3hrs |
| Styling CSS | H | 3hrs| 4hrs | 4hrs |
| Flexbox | H | 1hrs| 1hrs | 1hrs |
| Adding Media Queries | H | 1hrs| 1.5hrs | 1.5hrs |
| Total | H | 15hrs| 33.5hrs | 33.5hrs |

##Code Snippet

I spent most of the week going back and forth trying to retreive the proper API data results from different API keys but I was always met with the same issue: Unable to fetch api due to cors restrictions. Instructor, IA and TA were involved but couldnt seem to find the cause. It was only after tampering with the universe itself that me and Carrie(TA) were able to solve the issue. A string interpolation was added into the fetch's parameter, which then properly called the url. It makes sense now however all recorded lectures did not have to use one, nor did my fellow peers. I was able to get past this massive roadblock and was able to proceed with the projects.

```
const url = `https://www.superheroapi.com/api.php/3232678883523279/${superheroChoice}/image`;
  
  fetch(`${url}`)
    .then((results) => {
      return results.json();
    })
    .then((resultsJSON) => {
      console.log(resultsJSON);
      //runs the function below this one.
      displaySuperHero(resultsJSON);
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    });
});
```

##Change Log

I ended up switching APIs because the original one (comicvine.api) kept on returning the cors error. After spending a couple of days we decided it be best to use another API entirely. Major setback.


