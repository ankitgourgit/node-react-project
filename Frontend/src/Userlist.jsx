import React from "react";
import { useState, useEffect } from "react";

const Userlist = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [users])

    const getUsers = async () => {
        const response = await fetch("http://localhost:8000/mens", {
            method: "GET"
        })
        const data = await response.json()
        setUsers(data)
    }
    
    return (
        <>
            <div>
                <h1>Get Users Data</h1>
                <ul>
                    {users.map(user => <li>{user.fullname}_{user.phone}_{user.email}_{user.msg}</li>)}
                </ul>
            </div>
        </>
    )
}
export default Userlist;