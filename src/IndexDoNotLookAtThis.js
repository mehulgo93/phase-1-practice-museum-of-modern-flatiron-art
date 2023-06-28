// console.log('Write your code here');
fetch("http://localhost:3000/current-exhibits")
.then(response => response.json())
.then(exhibits => {
          exhibits.forEach(exhibit => displayTitle(exhibit))
})
function displayTitle(exhibit) {
  const title = document.getElementById("exhibit-title")
  title.innerText = exhibit.title
  const description = document.querySelector("#exhibit-description")
  description.innerText = exhibit.description
  const image = document.querySelector("#exhibit-image")
  image.src = exhibit.image
let newComments = document.querySelector("#comments-section")
exhibit.comments.forEach(comment => addingComments(comment))
//   let newComments = document.querySelector("#comments-section")
//   let exisitingComments = document.createElement('ul')
//   exisitingComments.textContent = exhibit.comments
//   newComments.appendChild(exisitingComments)
// }
//   console.log(exisitingComments)
function addingComments(comments) {
 const exisitingComments = document.createElement('ul')
 exisitingComments.textContent = comments
 newComments.appendChild(exisitingComments)
}
let form = document.querySelector("#comment-form")
 form.addEventListener("submit", (e) => {
    e.preventDefault()
    let addedComment = e.target["comment-input"].value
   addingComments(addedComment)
   e.target.reset()
    // let newComment = e.target["comment-input"].value
    // newComment.textContent = "Hello World!"

 })
//     e.preventDefault()
//     console.log(e.target)
//     // let newComment = event.target["comment-input"].value
//     // console.log(newComment)
// })
const buyButton = document.querySelector("#buy-tickets-button")
buyButton.addEventListener("click", (e) => {
    e.preventDefault()
    ticketsBoughtElement = document.querySelector("#tickets-bought")
    const currentTickets = parseInt(ticketsBoughtElement.innerText)
    const newTickets = currentTickets + 1
    ticketsBoughtElement.innerText = newTickets + " Tickets Bought"
})}