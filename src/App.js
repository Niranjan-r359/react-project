import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './login';
import Signup from './signup';
import Home from './home';
import BookTicket from './book-ticket';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bookticket" element={<BookTicket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
