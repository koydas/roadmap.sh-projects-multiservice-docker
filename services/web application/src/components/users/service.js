export function getUsers(callback) {
    fetch("http://localhost:3000/users")
        .then(r => r.json())
        .then(data => {
            if (callback)
                callback(data)
        })
}

export function newUser(user) {
    console.log(user)
    fetch("http://localhost:3000/users", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => console.log(r))
}