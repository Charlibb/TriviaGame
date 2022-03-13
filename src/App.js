/* import './App.css'; */

window.onload = sendApiRequest;

async function sendApiRequest(){
  let response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
  console.log(response);
  let data = await response.json();
  console.log(data);
  document.getElementById('category').innerHTML = `Category : ${data.results[0].category}`
  document.getElementById('difficulty').innerHTML = `Difficulty : ${data.results[0].difficulty}`
  document.getElementById('question').innerHTML = `Question : ${data.results[0].question}`
/*   useApiData(data); */
  document.getElementById('answer1').innerHTML = `A : ${data.results[0].correct_answer}`
  document.getElementById('answer2').innerHTML = `B : ${data.results[0].incorrect_answers[0]}`
  document.getElementById('answer3').innerHTML = `C : ${data.results[0].incorrect_answers[1]}`
  document.getElementById('answer4').innerHTML = `D : ${data.results[0].incorrect_answers[2]}`
}

let correctButton = document.querySelector("#answer1");
correctButton.addEventListener('click', ()=>{
  alert("the answer is right!");
  sendApiRequest();
})

let incorrectButton1 = document.getElementById("answer2");
incorrectButton1.addEventListener('click', ()=>{
  alert("the answer is wrong!");
})
let incorrectButton2 = document.getElementById("answer3");
incorrectButton2.addEventListener('click', ()=>{
  alert("the answer is wrong!");
})
let incorrectButton3 = document.getElementById("answer4");
incorrectButton3.addEventListener('click', ()=>{
  alert("the answer is wrong!");
})

/* function useApiData(){
  document.getElementById('category').innerHTML = `Category : ${data.results[0].category}`
  document.getElementById('difficulty').innerHTML = `Difficulty : ${data.results[0].difficulty}`
  document.getElementById('question').innerHTML = `Question : ${data.results[0].question}`

} */







/* const boton = document.getElementById('boton');
const contenedor = document.getElementById('contenedor')
let posts = {}; */

// https://jsonplaceholder.typicode.com/posts project:
/* boton.addEventListener('click', function () {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => {
      posts = data;
      mostrarDatos(posts);

    })

}) */


// // https://jsonplaceholder.typicode.com/posts project:
/* function mostrarDatos(posts) {
  posts.map((post, i) => {
    const titulo = document.createElement('h1');
    const contenido = document.createElement('p');

    titulo.innerHTML = (i + 1) + " - " + post.title;
    contenido.innerHTML = post.body;
   

    contenedor.appendChild(titulo);
    contenedor.appendChild(contenido);
  })
} */






//7morralla
/* function App() {
  return (
    <div className="App">
      <p id='p'></p>
     https://jsonplaceholder.typicode.com/posts
     https://opentdb.com/api.php?amount=1&type=multiple
   
     
    </div>
  );


  })
 */
/*   async function getJoke(){
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      p.innerText = data.value;
  } */




/* export default App; */