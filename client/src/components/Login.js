import React, {useState} from 'react'

function Login({onLogin}) {
  const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        fetch('/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
        .then((r) => r.json())
        .then((user) => onLogin(user))

        //reset the input after submit
        setUsername('')
        setPassword('')

      };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    <label htmlFor="password">Password: </label>
      <input
        type="text"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  </div>
  )
}


export default Login