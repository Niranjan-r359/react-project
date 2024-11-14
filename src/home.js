import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Bus Ticket Booking System</h1>
      <p>Book your bus tickets easily and quickly!</p>
      <Link to="/bookticket" style={styles.button}>Book a Ticket</Link>
    </div>
  );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        backgroundImage: 'url("https://cdn.wallpapersafari.com/87/83/aINmBZ.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // This will change the text color to white
      },
      
      
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default Home;
