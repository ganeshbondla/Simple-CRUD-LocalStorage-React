import React, { useState } from 'react'
import Header from './Header';

const SearchUser = () => {

    //Read data from localStorage
    let localData = JSON.parse(localStorage.getItem('usersList'));

    // Set State for localData
    const [userList] = useState(localData);

    // Setting state to input search
    const [userSearchInput, setUserSearch] = useState('');

    // Set userresult in state
    const [searchResult, setSearchResult] = useState([]);

    // Search User function on submit
    const searchUserNow = (e) => {
        e.preventDefault();

        // filter matched data of input email
        var finalResults = userList.filter((x) => x.email === userSearchInput);

        // checking filtered data length
        if(finalResults.length === 0)
        {
            // if No Filtered Data
            // Seeting state of resuts to empty
            setSearchResult([]);
            alert('No Data')
        }
        else
        {
            // if Filtered data contains some matched object
            // Setting state of results with matched object
            setSearchResult(finalResults);
        }
        
    }

    // Making map of filtered data from state varable
    var finalResults = searchResult.map((a, i) => {
        return(
            <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.mobile}</td>
            </tr>
    )
    })


    return(
        <>
        <Header />
        <div className='container mt-3 p-3'>
            <h2>Search User</h2>
            <div className='p-2'>
            <form onSubmit={searchUserNow}>
                <div className="form-group">
                    <input type="email" className="form-control" id="inputEmail" onChange={(e) => setUserSearch(e.target.value)} placeholder="Enter User Email" required />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <hr></hr>
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
            {finalResults}
            </tbody>
            </table>
            </div>
        </div>
        </>
    )
}

export default SearchUser