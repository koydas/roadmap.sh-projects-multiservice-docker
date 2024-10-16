import React, { useState } from 'react'
import { getUsers, newUser } from './service'

function createUser(firstName, lastName) {
    firstName.style.borderColor = !firstName.value ? "red" : ""
    lastName.style.borderColor = !lastName.value ? "red" : ""

    if (firstName.value && lastName.value) {
        newUser({ firstName: firstName.value, lastName: lastName.value })
        firstName.value = ""
        lastName.value = ""
    }
}

export default ({ }) => {
    const [users, setUsers] = useState([])

    getUsers((d) => setUsers(d))

    return <>
        <h3>Users</h3>

        <input id="firstName" placeholder="first name" />
        <input id="lastName" placeholder="first name" />
        <button onClick={() => createUser(firstName, lastName)}>New User</button>
        
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(u => <>
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                        </tr>
                    </>)
                }
            </tbody>
        </table>
    </>
}