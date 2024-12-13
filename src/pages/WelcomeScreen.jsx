import React from 'react'
import { OidcSecure } from '@axa-fr/react-oidc';
import { useOidcUser, useOidcIdToken, useOidcAccessToken } from '@axa-fr/react-oidc';
import { useState, useEffect } from 'react';
import axios from "axios";



const WelcomeScreen = () => {
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [id2, setId2] = useState('');
  const [status, setStatus] = useState('');
  const [tasklist, setTaskList] = useState([]);
  const {oidcUser, oidcUserLoadingState} = useOidcUser();
  const {idToken, idTokenPayload} = useOidcIdToken();
  const {accessToken, accessTokenPayload} = useOidcAccessToken();

  useEffect(()=> {
    axios.get("http://localhost:8080/task")
    .then(response => {
      setTaskList(response.data.tasks);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    const task = {Title: title};

    axios.post("http://localhost:8080/task", task, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      console.log("new task added")
    })
  }
  axios.get("http://localhost:8080/task")
  .then(response => {
    console.log(response.data); // Log the data from the API
  })
  .catch(error => {
    console.error("Error fetching data:", error); // Log any error
  });

  const handleDelete = (e) => {
    e.preventDefault();
    const taskD = {ID: parseInt(id)};

    axios.delete("http://localhost:8080/task", {
      data: taskD, // Send the task data inside 'data'
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(() => {
      console.log("task deleted")
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const taskU = {ID: parseInt(id2), Status: status};

    axios.put("http://localhost:8080/task", taskU, {  // Just send 'taskU' as the second parameter
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(() => {
      console.log("task updated")
    })
  }

  const role = oidcUser && oidcUser.groups.includes('taskManG1') ? 'Admin' : 'User';

  return (
    <OidcSecure>
      <h1>Welcome{oidcUser ? `, ${oidcUser.name}` : ''}</h1>
      {oidcUser && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
          <p>Email: {oidcUser.email}</p>
          <p>Role: {role}</p>
          

        <form onSubmit={handleUpdate}>
        <label>Task ID:</label>
        <input
          type="number"
          required
          value={id2}
          onChange={(e) => setId2(e.target.value)}
        />
        <label>New Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="InProgress">InProgress</option>
          <option value="Completed">Completed</option>
        </select>
        <button>Change Status</button>
        </form>
        
        <form onSubmit={handleCreate}>
        <label>Task Name:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button style={{ marginBottom: '10px', backgroundColor: '#4CAF50' }}>Add Task</button>
        </form>

        <form onSubmit={handleDelete}>
        <label>Task ID:</label>
        <input 
          type="number" 
          required 
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button style={{ marginBottom: '10px', backgroundColor: '#f44336' }}>Delete Task</button>
        </form>


        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          {tasklist.map((task) => (
          <div key={task.ID} style={{ display: "flex", gap: "10px" }}>
            <span>{task.ID} | </span>
            <span>{task.Title || "No Title Provided"} -</span>
            <span>{task.Status}</span>
          </div>
          ))}
        </div>

        </div>
      )}

    </OidcSecure>
  );
};

export default WelcomeScreen;
