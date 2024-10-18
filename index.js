// Add your code here
function submitData (name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(res => res.json())
    .then(users => {
        const id = document.createElement('h2')
        id.textContent = users.id
        console.log(id)
        const body =document.querySelector('body') 
        body.appendChild(id)  
    })
    .catch(error => {
        alert("Something went wrong!!")
        const errorMessage = document.createElement('p')
        errorMessage.textContent = error.message
        const body =document.querySelector('body')
        body.appendChild(errorMessage)
        
    })

}




