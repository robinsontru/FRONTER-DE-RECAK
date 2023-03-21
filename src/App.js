import logo from './logo.svg';
import './App.css';

//importamas los componentes 
import CompShowBlogs from './blog/Showblog'
import CompCreateBlog from './blog/Createblog'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={ <CompShowBlogs></CompShowBlogs> } > </Route>
      <Route path='/Crear' element={<CompShowBlogs></CompShowBlogs>} > </Route>
    </Routes>
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;
