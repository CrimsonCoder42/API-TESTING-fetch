let nameArray = [];

const fetchPromise = fetch("https://swapi.dev/api/people/");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  let charData = people.results.forEach(character => {
     const  {name, height, mass} = character
    console.log(name)
    console.log(height);
    console.log(mass)
  });
  //let charNames = character.name;

  //for (let i = 0; charData.length)
});

