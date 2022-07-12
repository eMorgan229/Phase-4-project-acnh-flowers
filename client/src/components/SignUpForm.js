import React, {useState} from 'react'

//look at the "putting it all together lab" to see how to implement the bootstrap for this

function SignUpForm({onLogin}) {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
const[name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            username,
            password,
            password_confirmation: passwordConfirmation,
        }),
    }).then((r) => r.json())
    .then((user) => onLogin(user))
        setUsername('')
        setPassword('')
        setPasswordConfirmation('')
        setName('')
      
  };
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
            type="text"
            text="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit">Sign Up:</button>
    
    </form>
  )
}

export default SignUpForm