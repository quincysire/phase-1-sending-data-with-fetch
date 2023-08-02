// Add your code here
function submitData(name, email) { 
  
    return fetch('http://localhost:3000/users', { 
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ 
            "name": `${name}`,
            "email": `${email}`
        }) 
    }) 
        .then(Response => Response.json()) 
        .then(object => { 
            let p = document.createElement('p'); 
            p.textContent = object.id; 
            document.querySelector('body').appendChild(p); 
        }) 
        .catch(error => { 
            document.querySelector('body').textContent = error; 
        }) 
} 
submitData("Quincy", "Quincymail")