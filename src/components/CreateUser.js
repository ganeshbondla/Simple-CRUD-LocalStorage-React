import React, { useState } from 'react'
import Header from './Header';

const CreateUser = () => {

    //set states
   const [inputName, setInputName] = useState('');
   const [inputEmail, setInputEmail] = useState('');
   const [inputMobile, setInputMobile] = useState('');

   // read localStorage
   let localData = JSON.parse(localStorage.getItem('usersList'));

   if(localData == null)
   {
        // if localStorage Empty
        localData =  [];
   }

   // Set State of localStoage data
   const [usersList, setUsersList] = useState(localData);

   // Function of submit form
   const saveData = (e) => {
       e.preventDefault();

       // Create new object of form data
       const thisData = {
        id : Math.floor(1000 + Math.random() * 9999),
        name : inputName,
        email : inputEmail,
        mobile : inputMobile
       }

       // Add new object to existing state varable
       const addData = [...usersList, thisData];

       // Update State with new object
       setUsersList(addData);

       // Set localStorge with Updated State
       localStorage.setItem('usersList',JSON.stringify(addData));

       // make empty of all input states
       setInputName('');
       setInputEmail('');
       setInputMobile('');

       //reseting the form
       document.getElementById('addUserForm').reset();
   }

    return(
        <>
        <Header />
        <div className='container mt-3 p-3'>
            <h2>Create User</h2>
            <hr></hr>
            <div className='row p-2'>
                <div className='col-md-6'>
                    <form onSubmit={saveData} id="addUserForm">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" onChange={(e) => setInputName(e.target.value)} placeholder="Enter name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" onChange={(e) => setInputEmail(e.target.value)} placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" id="mobile" onChange={(e) => setInputMobile(e.target.value)} placeholder="Enter mobile" required />
                        </div>
                        <button type="submit"  className="btn btn-block btn-primary">Submit</button>
                    </form>
                </div>
                <div className='col-md-6'>
                    Test 
                </div>
            </div>
        </div>
        </>
    )
}

export default CreateUser;