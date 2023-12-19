// import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";
import NavBar from './Components/NavBar/NavBar';
import Chat from './Pages/Chat/Chat';
import Settings from './Pages/Settings/Settings';
function App() {
  return (
    <div className="App flex ">
      <NavBar />
      <Routes>
        <Route path='/users' element={ <Chat /> } />
        <Route path='/chat' element={ <Chat /> } />
        <Route path='/settings' element={ <Settings /> } />
      </Routes>
    </div>
  );
}

export default App;
