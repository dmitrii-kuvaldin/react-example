import { FC, useState } from 'react'
import cn from 'classnames'
import classes from './BurgerMenu.module.css'
import { Link, useLocation } from 'react-router-dom'

interface IBurgerMenu { }

const BurgerMenu: FC<IBurgerMenu> = ({ }) => {

  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const isActive = (path: string) => {
    console.log('location.pathname', location.pathname);
    if (location.pathname === path) {
      return 'active'; // CSS class name for active item
    }
    return '';
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (

    <>
      <div className={classes.burger}>
        <svg onClick={toggleMenu} className={classes.sandwich} viewBox="0 -53 384 384" width="28px" xmlns="http://www.w3.org/2000/svg">
          <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>

      </div>

      {showMenu && (
        <div className={classes.menuOverlay}>
          <div className={classes.menuLayout}>
            <div className={classes.menuOptions}>
              <Link onClick={() => setShowMenu(false)} className={cn(classes.navItem, classes.logo, isActive('/'))} to="/">
                <h1 className={cn(classes.navItem, classes.logo)}>home</h1>
              </Link>

              <Link onClick={() => setShowMenu(false)} className={cn(classes.navItem, classes.logo, isActive('/products'))} to="products">
                <h1 className={cn(classes.navItem, classes.logo)}>products</h1>
              </Link>

              <Link onClick={() => setShowMenu(false)} className={cn(classes.navItem, classes.logo, isActive('/city-toggle'))} to="city-toggle">
                <h1 className={cn(classes.navItem, classes.logo)}>city-toggle</h1>
              </Link>

              <Link onClick={() => setShowMenu(false)} className={cn(classes.navItem, classes.logo, isActive('/sandwich'))} to="sandwich">
                <h1 className={cn(classes.navItem, classes.logo)}>sandwich</h1>
              </Link>
              <Link onClick={() => setShowMenu(false)} className={cn(classes.navItem, classes.logo, isActive('/youtube'))} to="youtube">
                <h1 className={cn(classes.navItem, classes.logo)}>youtube</h1>
              </Link>

            </div>
          </div>
        </div>
      )}



    </>

  )
}

export default BurgerMenu
