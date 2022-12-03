import React, { useState } from 'react';
import Header from './Header';

const Home = () => {

    // Read the existing localStorage 
    let readUsers = JSON.parse(localStorage.getItem('usersList'));

    // Adding Existing LocalStorage to State
    const [readlist, setReadList] = useState(readUsers);

    // Maping for each on state list, and making return view
    const listView = readlist.map((x,i) => {
        return(
                <tr key={i}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.mobile}</td>
                </tr>
        )
    })



    return(
        <>
        <Header />
        <div className='container mt-3 p-3'>
            <h2>List of Users</h2>
        </div>
        <table className="table text-center">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                </tr>
            </thead>
            <tbody>
                {listView}
            </tbody>
            </table>
        </>
    )
}

export default Home;