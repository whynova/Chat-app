import NavBar from './component/NavBar';
import { Routes, Route, Navigate} from 'react-router-dom';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <>
   
    <NavBar></NavBar>
      
      <Routes>
        <Route path='/' element={<Chat/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<Navigate to='/'/>}></Route>
      </Routes>
      
    
      
      
    </>
  )
}

export default App
