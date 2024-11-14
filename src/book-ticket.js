import React, { useState } from 'react';

const BookTicket = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ticket booked from ${formData.from} to ${formData.to} on ${formData.date} for ${formData.passengers} passengers.`);
  };

  return (
    <div style={styles.container}>
      <h1>Book Your Bus Ticket</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          From:
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          To:
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Passengers:
          <input
            type="number"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            min="1"
            required
          />
        </label>
        <button type="submit" style={styles.button}>Book Ticket</button>
      </form>
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
    backgroundColor: '#e3f2fd',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '300px',
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default BookTicket;
