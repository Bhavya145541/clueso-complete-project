import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/feedback');
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Clueso Clone Dashboard</h1>
      </header>
      <main>
        <h2>Feedback Collection</h2>
        <ul>
          {feedbacks.map(feedback => (
            <li key={feedback._id}>
              <p>{feedback.content}</p>
              <small>{new Date(feedback.timestamp).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
