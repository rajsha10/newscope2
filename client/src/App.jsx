import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Provider} from "react-redux"
import './App.css'
import { AuthorApplication, Feed } from './pages'
import { Footer, Navbar } from './components';
import store from './store/store';
import LoginAsAdmin from './pages/LoginAsAdmin/LoginAsAdmin';

function App() {


  return (
    <Provider store={store}>  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Feed />} />
      <Route path='/apply' element={<AuthorApplication />} />
      <Route path='/admin/login' element = {<LoginAsAdmin/>} />

    </Routes>

    <Footer />

  </Router></Provider>
  
  )
}

export default App
