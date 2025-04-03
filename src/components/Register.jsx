import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { appContext } from "../App";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const { users, setUsers, user, setUser } = useContext(appContext);
  const [msg, setMsg] = useState("");
  const colref = useRef();

  const handleSubmit = () => {
    if (!user.name || !user.email || !user.password) {
      setMsg("All fields are required");
      colref.current.style.color = "red";
      return;
    }

    const found = users.find((value) => value.email === user.email);
    if (found) {
      setMsg("User already exists");
      colref.current.style.color = "blue";
    } else {
      setMsg("Registration successful!");
      colref.current.style.color = "green";
      
      // Adding the new user to the users array
      setUsers([...users, { ...user }]);  
      
      // Resetting the form
      setUser({ name: "", email: "", password: "" });  

      // Navigate to the login page after successful registration
      navigate("/login");
    }
  };

  const handleDelete = (email) => {
    setUsers(users.filter((value) => value.email !== email));
  };

  return (
    <div className="App-Register-Row">
      <div className="App-Register-Box">
        <h3>Registration Form</h3>
        <p ref={colref}>{msg}</p>
        <p>
          <input
            type="text"
            value={user.name}
            placeholder="Enter Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </p>
        <p>
          <input
            type="text"
            value={user.email}
            placeholder="Email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </p>
        <p>
          <input
            type="password"
            value={user.password}
            placeholder="New password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </p>
        <p>
          <button onClick={handleSubmit}>Register</button>
        </p>
        <p>
          <Link to="../login">Already a member? Login here!</Link>
        </p>
      </div>
      
      <div className="App-Register-Box">
        <h3>User List</h3>
        <table className="App-Register-Table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((value, index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
                <td>
                  <button onClick={() => handleDelete(value.email)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
