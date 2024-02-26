import { FC, useEffect } from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
// import cn from 'classnames'
import styles from './Layout.module.css'
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Loader from '../components/loader/Loader';
import { loginToken } from '../features/auth/authAction';

const initialVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
}

const Layout: FC = () => {
  const { isLoading } = useAppSelector(state => state.user)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token);
    if (token && token.length > 0) {
      // обращаемся к action и передаем токен
      dispatch(loginToken(token))
    }
  }, [])

  return (
    <>
      {isLoading ? <Loader /> : (<>
        <motion.div
          className={styles.container}
          animate='visible'
          initial='hidden'
          variants={initialVariant}
        >
          <Header />
          <main className={styles.main}>
            <Outlet />
          </main>
          <Footer />
        </motion.div>
      </>
      )}

    </>
  )
}

export default Layout
