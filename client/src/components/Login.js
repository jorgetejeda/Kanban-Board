import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [username, setUsername] = React.useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('userId', username)
    setUsername('')
    navigate('/task')
  }

  return (
    <div className='login__container'>
      <form className='login__form' onSubmit={handleLogin}>
        <label htmlFor='username'>Provide a username</label>
        <input
          type='text'
          name='username'
          id='username'
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button>Sign in</button>
      </form>
    </div>
  )
}
