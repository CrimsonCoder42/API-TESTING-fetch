let nameArray = {}

const fetchPromise = fetch("https://swapi.dev/api/people/");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
    let data = people.results
    let info = data.forEach(element => {
        const {name, height, mass} = element;
        console.log(name)
        console.log(height)
        console.log(mass)
    });

    
});


// let namePost = (name) => {
//     name.forEach(char => {
//      document.createElement("div");
//     });
// }