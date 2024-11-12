import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import './App.css';
import { AuthorApplication, Feed, SinglePost } from './pages';
import { Footer, Navbar, CategoryBar } from './components';
import store from './store/store';
import LoginAsAdmin from './pages/LoginAsAdmin/LoginAsAdmin';
import CategoryPage from './pages/CategoryPage/CategoryPage'; // Import the new CategoryPage component

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
          <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* Add this new route */}
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;