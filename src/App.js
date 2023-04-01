
import './App.css';
import RegisterForm from './components/registerForm';
import '../src/assets/styles/global.scss'
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <RegisterForm />
    </div>
  );
}

export default App;
