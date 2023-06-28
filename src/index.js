fetch("http://localhost:3000/current-exhibits")
 .then(response => response.json())
 .then(exhibits => exhibits.forEach(exhibit => exhibitFetch(exhibit)))

 function exhibitFetch(exhibit) {
   const exhibitTitle = document.querySelector("#exhibit-title")
   exhibitTitle.textContent = exhibit.title
   const exhibitDescription = document.querySelector("#exhibit-description")
   exhibitDescription.textContent = exhibit.description
   const exhibitImage = document.querySelector("#exhibit-image")
   exhibitImage.src = exhibit.image
 
const currentComments = document.querySelector("#comments-section")
exhibit.comments.forEach(comment => addingComments(comment))
 
 
 function addingComments(comments) {
    let newComments = document.createElement("ul")
    newComments.innerText = comments
    currentComments.appendChild(newComments)
 }

 const form = document.querySelector("#comment-form")
 form.addEventListener("submit", (e) => {
    e.preventDefault()
    const addedComments = e.target["comment-input"].value
    addingComments(addedComments)
    e.target.reset()
})

const buyTicketsButtton = document.querySelector("#buy-tickets-button")
buyTicketsButtton.addEventListener("click", (e) => {
  e.preventDefault()
  const ticketsBought = document.querySelector("#tickets-bought")
//   const currentTickets = parseInt(ticketsBought.innerText)
  const newTickets = parseInt(ticketsBought.innerText) + 1
  ticketsBought.innerText = newTickets + " Tickets Bought"
//   ticketsBought.innerText = newTickets + " Tickets Bought"
//   const newTickets = currentTickets + 1
//   console.log(newTickets)
})

}
