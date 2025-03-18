import React from "react";

export default function Register() {
  return (
    <div>
      <h2>Create Account</h2>
      <input type="text" placeholder="Enter email"></input>
      <input type="password" placeholder="Enter password"></input>
      <input type="date" placeholder="Enter DOB"></input>
      <button>Register</button>
    </div>
  );
}