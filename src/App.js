import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import ContactUs from './Contact-us';
import About from './About';
import UserList from './User-list';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
            <Route exact path="/home" element={<Home />}></Route> 
            <Route exact path="/contact-us" element={<ContactUs />}></Route> 
            <Route exact path="/about" element={<About />}></Route> 
            <Route exact path="/login" element={<Login />}></Route> 
            <Route exact path="/user-list" element={<UserList />}></Route> 
        </Routes>
     {/* <Footer /> */}
      </Router>
      </div>
  );
}

export default App;
