import { FC, useState, ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { loginAction } from '../authAction';
import ICredentials from '../types/Credentials';
import useLocalStorage from '../../../hooks/useLS';
import { Navigate, useNavigate } from 'react-router-dom';
// import cn from 'classnames'
// import styles from './Login.module.css'

const Login: FC = () => {
  const dispatch = useAppDispatch()
  
  const { user } = useAppSelector(state => state.user)
  // хук из  react-router-dom для переадресации
  const navigate = useNavigate()

  const [username, setUsername] = useLocalStorage('username', '');
  const [password, setPassword] = useLocalStorage('password', '');

  console.log(4 * 4);

  console.log(password);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const credentials: ICredentials = { username, password }
    console.log(credentials)

    dispatch(loginAction(credentials))
    navigate('/')
  }

  if (user) {
    return <Navigate to='../' />
  }

  return (
    <div>
      <h1>Login</h1>
      <span>username: 'kminchelle',
        password: '0lelplR',</span>
      <form onSubmit={handleSubmit}>
        <input placeholder='username' value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
        <input placeholder='password' value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default Login
