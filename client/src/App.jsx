import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import './App.css';
import { AuthorApplication, Feed, SinglePost } from './pages';
import { Footer, Navbar, CategoryBar } from './components';
import store from './store/store';
import LoginAsAdmin from './pages/LoginAsAdmin/LoginAsAdmin';

function App() {
  return (
    <Provider store={store}>  
      <Router>
        <Navbar />
        <CategoryBar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/apply' element={<AuthorApplication />} />
          <Route path='/admin/login' element={<LoginAsAdmin />} />
          <Route path="/:title" element={<SinglePost />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
