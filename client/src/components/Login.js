import React, {useState} from 'react'

function Login({onLogin}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => onLogin(user));
            
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })

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
    <>
    {errors.map((err) => (
      <div key={err}>{err}</div>
      ))}
    </>
  </div>
  )
}


export default Login