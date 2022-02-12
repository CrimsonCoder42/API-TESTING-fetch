const container = document.getElementById('main');

const fetchPromise = fetch("https://swapi.dev/api/people/");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
    let data = people.results
     data.forEach(element => {
         const card = document.createElement('div');
         card.classList = 'card-body';
         //filter incoming info for what we need. 
         const {name, height, mass} = element;
         // Construct card content
         const content = `
           <div class="card">
               <p>Name: ${name}</p>
               <p>Height: ${height}</p>
               <p>Mass: ${mass}</p>
             </div>
         `;
         // Append newyly created card element to the container
         container.innerHTML += content;
       })
    });