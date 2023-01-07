import Header from "./components/Header";
import { BrowserRouter as Router ,Routes, Route, } from 'react-router-dom';
import Home from './components/Home'
import AddBook from './components/AddBook'
import Books from './components/Book/Books'
import About from './components/About'
import BookDetails from './components/Book/BookDetail'

function App() {
  return (
   <>
   <Router>
   <div>
    <Header/>
   </div>
  
   <Routes>
   <Route path ="/" element={<Home/>} />
   <Route path ="/add" element={<AddBook/>}  />
   <Route path ="/books" element={<Books/>}  />
   <Route path ="/about" element={<About/>} />
   <Route path ="/books/:id" element={<BookDetails/>} />
   </Routes>
   </Router>
   </>
  );
}

export default App;
