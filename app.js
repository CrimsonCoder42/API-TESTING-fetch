
let nameArray = {}

const fetchPromise = fetch("https://swapi.dev/api/people/");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
    let data = people.results
     data.forEach(element => {
         console.log(element)
        namePost(element)
    });
    
});


let namePost = (element) => {
    const {name, height, mass} = element;
    const newDiv = document.createElement("div");
    newDiv.className = "card"

  // and give it some content
  const newContent = document.createTextNode(`Name: ${name}!`);

  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("main");
  document.body.insertBefore(newDiv, currentDiv);

    // +"Name:"+ name +`<br>`
    // +"Height:"+ height +`<br>` 
    // +"Mass:"+ mass +`<br>`
    // +`</div><br>`)  
}