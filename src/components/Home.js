import React, { useState } from 'react';
import Header from './Header';
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";

const Home = () => {

    // Read the existing localStorage 
    let readUsers = JSON.parse(localStorage.getItem('usersList'));

    // Adding Existing LocalStorage to State
    const [readlist, setReadList] = useState(readUsers);

    // Declaring states for edit inputs
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ mobile, setMobile ] = useState('');
    const [ userId, setUserId ] = useState('');

    // Maping for each on state list, and making return view
    const listView = readlist.map((x,i) => {
        return(
                <tr key={i}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.mobile}</td>
                    <td><button onClick={() => editAction(x.id)} className='btn btn-sm mr-2 text-primary' data-toggle="modal" data-target="#editModal"><BsPencilSquare/></button>  <button onClick={() => deleteAction(x.id)} className='btn btn-sm ml-2 text-danger'><BsFillTrashFill /></button></td>
                </tr>
        )
    })

    // Edit Action
    const editAction = (uid) => {

        var findTheData = readlist.filter((c) => c.id === uid);

        console.log(findTheData);

        if(findTheData.length === 0)
        {
            alert ("Some Issue");
        }
        else
        {
            setName(findTheData[0].name);
            setEmail(findTheData[0].email);
            setMobile(findTheData[0].mobile);
            setUserId(findTheData[0].id);
        }
        
    }

    const updateData = () => {

        // find user in list by state user id
        var findUserNow = readlist.filter((c) => c.id === userId);

        // update details to found user in list
        findUserNow[0].name = name;
        findUserNow[0].email = email;
        findUserNow[0].mobile = mobile;

        // set state for updated list
        setReadList(readlist);

        // reset localstorage with updated list
        localStorage.setItem('usersList', JSON.stringify(readlist));

        // once updated mke all states empty
        setName('');
        setEmail('');
        setMobile('');
        setUserId('');
    }

    const deleteAction = (uid) => {

        //find remainig users from list except selected user
        var findListNow = readlist.filter((a) => a.id !== uid);

        // update remains list in state
        setReadList(findListNow);

        //reset remains list in localStorage
        localStorage.setItem('usersList', JSON.stringify(findListNow));

    }

    return(
        <>
        <Header />
        <div className='container mt-3 p-3'>
            <h2>List of Users</h2>
        <hr></hr>
        <table className="table text-center">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {listView}
            </tbody>
            </table>
            </div>

        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <form onSubmit={updateData}>
            <div class="modal-header">
                <h5 class="modal-title" id="editModalLabel">Edit Data</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}  placeholder="Enter mobile" required />
                        </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
            </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default Home;