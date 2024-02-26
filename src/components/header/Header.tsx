import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logoutUser } from '../../features/auth/authSlice'
import BurgerMenu from '../burgerMenu/BurgerMenu'

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const { products, favorites } = useAppSelector(state => state.products)

  const { user, isLoading } = useAppSelector(state => state.user)

  const handleLogout = () => {
    localStorage.setItem('token', '')
    dispatch(logoutUser())
  }


  return (
    <div className={styles.header}>
      <BurgerMenu />
      <div className={styles.navbar}>

        <NavLink to='/'>{user ? 'Product page' : 'Main page'}</NavLink>
        {/* если есть user в redux то мы показываем один интерфейс, а если нет предлагаем пройти авторизацию */}
        {user ? (
          <>

            <NavLink to='products'>Products</NavLink>
            <NavLink to='city-toggle'>Change city</NavLink>
            <NavLink to='sandwich'>Make a sandwich</NavLink>
            <NavLink to='youtube'>Youtube video</NavLink>
            <NavLink onClick={handleLogout} to='/'>Logout</NavLink>
          </>
        ) : (
          <NavLink to='login'>Login</NavLink>
        )}
      </div>
      <div>
        {user && (
          <>
            <span>товары в магазине: <span style={{ color: 'white' }}>{products.length}</span>  </span>
            <span>/  любимые: <span style={{ color: 'white' }}>{favorites.length}</span></span>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
