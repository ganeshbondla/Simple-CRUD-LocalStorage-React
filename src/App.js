import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import SearchUser from './components/SearchUser';

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create-user' element={<CreateUser />}></Route>
        <Route path='/search-user' element={<SearchUser />}></Route>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
