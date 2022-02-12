const container = document.getElementById('main');

const fetchPromise = fetch("https://swapi.dev/api/people/");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
    let data = people.results
     data.forEach(element => {
         const card = document.createElement('div');
         card.classList = 'card-body';
         const {name, height, mass} = element;
         // Construct card content
         const content = `
           <div class="card">
           <div class="card-header" id="heading-${name}">
             <h5 class="mb-0">
             </h5>
           </div>
       
           <div id="collapse-${name}" class="collapse show" aria-labelledby="heading-${name}" data-parent="#accordion">
             <div class="card-body">
       
               <h5>${name}</h5>
               <p>${height}</p>
               <p>${mass}</p>
             </div>
           </div>
         </div>
         `;
       
         // Append newyly created card element to the container
         container.innerHTML += content;
       })
    });