import logo from './logo.svg';
import './App.css';

//importamas los componentes 
import CompShowBlogs from './blog/Showblog'
import CompCreateBlog from './blog/Createblog'
import  CompEditBlog from './blog/Editblog'
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
      <Route path='/create' element={ <CompCreateBlog />} />
      {/* <Route path='/edit/:id' element={ <CompEditorBlog />} /> */}
      <Route path='/edit/:id' element={ <CompEditBlog />} />

      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
