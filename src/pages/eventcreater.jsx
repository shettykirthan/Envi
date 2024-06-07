import React, { useState, useEffect } from 'react';
import { account, databases, DATABASE_ID, Events } from '../appwrite/appwriteConfig';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const EventCreater = () => {
  const [eventName, setEventName] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDetails = await account.get();
        if (userDetails.$id === 'admin' || userDetails.$id === 'admin1') {
          setUser(userDetails);
        } else {
          alert('You do not have permission to create events.');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUser();
  }, []);

  const addTask = async () => {
  if (!taskInput || !taskDate) {
    alert('Please provide both a task and a date.');
    return;
  }

  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      Events,
      'unique()',
      {
        name: user ? user.name : 'Unknown',
        user_id: user ? user.$id : 'Unknown',
        eventname: eventName,
        tasks: taskInput,
        date: taskDate,
      }
    );

    // Update the tasks state by adding the new task directly
    setTasks([...tasks, { task: taskInput, date: taskDate }]);
    
    // Clear the input fields after adding the task
    setTaskInput('');
    setTaskDate('');
  } catch (error) {
    console.error('Failed to add task:', error);
    alert('Error adding task.');
  }
};


  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const gotoEventList = () => {
    navigate('/eventslist');
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Create Events</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <div className="task-inputs">
            <input
              type="text"
              placeholder="Task"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
          </div>
        </div>
        <div className="task-list">
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task.task} - {task.date}{' '}
                <button onClick={() => removeTask(index)} className="RemoveBtn">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="buttons">
          <button onClick={gotoEventList}>Check Event List</button>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 60%;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #f9f9f9;
        }
        h2 {
          text-align: center;
          color: #333;
        }
        .input-container {
          margin-bottom: 20px;
        }
        .input-container input {
          margin-right: 10px;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ddd;
        }
        .task-inputs {
          display: flex;
          padding-top:20px;
          
        }
          
        .RemoveBtn{
        width:20%;
        margin-right:10%;
        }
        .task-inputs input {
          margin-right: 5px;
        }
        .task-inputs button {
          padding: 10px 15px;
          border: none;
          background-color: #28a745;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .task-inputs button:hover {
          background-color: #218838;
        }
        .task-list {
          margin: 20px 0;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background-color: #fff;
        }
        .task-list ul {
          list-style: none;
          padding: 0;
        }
        .task-list li {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        .task-list button {
          background: #dc3545;
          color: #fff;
          border: none;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .task-list button:hover {
          background-color: #c82333;
        }
        .buttons {
          text-align: center;
          
        }
        
        .buttons button {
          padding: 10px 20px;
          padding-left: 10px;
          border: none;
          background-color: #007bff;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .buttons button:hover {
          background-color: #0056b3;
        }


        @media (max-width: 768px) {
          .container {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default EventCreater;
