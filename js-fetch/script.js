fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))


async function getNotes() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const notes = await response.json()

  console.log('notes', notes);

  return notes
}

async function addNotesToPage() {
  const notes = await getNotes()
  
  const ul = document.getElementById("notes")

  notes.map((note) => {
    const li = document.createElement("li")
    li.innerHTML = `${note.title}`
    ul.appendChild(li)
  })
}

addNotesToPage()

//post
/*
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Nuevo post',
    body: 'Contenido del post',
    userId: 1
  })   
})
  .then((response) => response.json())
  .then((data) => console.log('post', data));
*/