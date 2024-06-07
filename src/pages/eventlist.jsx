import React, { useState, useEffect } from 'react';
import { databases, DATABASE_ID, Events, currentEvent } from '../appwrite/appwriteConfig';
import Navbar from '../components/Navbar';
import { useAuth } from '../utils/AuthContext';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [buttonStates, setButtonStates] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await databases.listDocuments(DATABASE_ID, Events);
        setEvents(response.documents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const joinEvent = async (eventId, taskName) => {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        currentEvent,
        'unique()',
        {
          tasks: taskName,
          user: user.$id,
          top: user.$id,
          runnerup: user.$id,
        }
      );

      console.log('Document created:', response);

      // Update the state for the specific button
      setButtonStates((prevState) => ({
        ...prevState,
        [eventId]: true,
      }));
    } catch (error) {
      console.error('Failed to add task:', error);
      alert('Error adding task.');
    }
  };

  // Group events by event name and sort tasks by date
  const groupedEvents = events.reduce((acc, event) => {
    event.dateObj = new Date(event.date);

    if (!acc[event.eventname]) {
      acc[event.eventname] = [];
    }
    acc[event.eventname].push(event);
    return acc;
  }, {});

  // Sort tasks within each event by date
  Object.keys(groupedEvents).forEach(eventName => {
    groupedEvents[eventName].sort((a, b) => a.dateObj - b.dateObj);
  });

  return (
    <div>
      <Navbar />
      <h2>All Events</h2>
      {Object.keys(groupedEvents).map((eventName) => (
        <div key={eventName} className="event-container">
          <div className="event-name-box">
            <h3 className='eventname'>{eventName}</h3>
          </div>
          <h4>Tasks:</h4>
          {groupedEvents[eventName].map((event) => (
            <div key={event.$id} className="event-task-box">
              <ul>
                <li className='alllists'>{event.tasks}</li>
              </ul>
              <p>Date: {event.date}</p>
              <button
                onClick={() => joinEvent(event.$id, event.tasks)}
                disabled={buttonStates[event.$id]} // Disable button if task is accepted
              >
                {buttonStates[event.$id] ? 'Accepted' : 'Accept'}
              </button>
            </div>
          ))}
        </div>
      ))}
      <style jsx>{`
        .event-container {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          margin-bottom: 20px;
          overflow: hidden; /* Ensure content stays within the container */
          margin: 10px;
        }
        .event-name-box {
          background-color: #f0f0f0;
          padding: 5px;
          border-bottom: 1px solid #ccc;
          border-radius: 5px 5px 0 0;
        }
        .eventname {
          font-size: 4.5vh;
        }
        .event-task-box {
          border: 1px solid #eee;
          border-radius: 5px;
          padding: 10px;
          margin-top: 10px;
          margin: 10px;
        }
        button {
          background-color: #0056b3;
          color: #fff;
          font-weight: bold;
          width: 20%;
          margin-right: 5%;
          border: 1px solid #ccc;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
        }
        button:disabled {
          background-color: green;
          border: 1px solid #ccc;
          cursor: not-allowed;
        }
        
        .alllists {
          font-size: 3.5vh;
        }

        @media (max-width: 768px) {
          .event-container {
            padding: 5px;
          }
          .event-name-box {
            padding: 3px;
          }
          .event-task-box {
            padding: 8px;
          }
          button {
            padding: 3px 8px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default EventList;