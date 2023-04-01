import './App.css';
import '../src/assets/styles/global.scss'
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'
import RegisterUsers from "./pages/register-users";
import UsersList from "./pages/users-list";

function App() {
  return (
    <div className="App">

      <header>
        <ul>
          <li>
            <NavLink to='/'>Create users</NavLink>
          </li>
          <li>
            <NavLink to='/users'>Users List</NavLink>
          </li>
        </ul>
      </header>

      <Routes>
        <Route element={<RegisterUsers/>} path='/'/>
        <Route element={<UsersList/>} path='/users'/>
        <Route element={<Navigate to={'/'}/>} path='*'/>
      </Routes>

    </div>
  );
}

export default App;
