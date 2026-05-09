import React, { useContext, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../Redux/cartSlice'

export const Navbar = () => {
  const { theme, settheme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(clearCart())
    setIsOpen(false)
    navigate('/login')
  }

  const themeHandler = () => {
    if (theme == 'light') {
      settheme('dark')
    } else {
      settheme('light')
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinkClass = 'whitespace-nowrap text-decoration-none text-white hover:text-gray-300'

  return (
    <div>
      <nav className="bg-zinc-900 px-4 py-4 text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h3 style={{ color: 'purple', margin: 0 }} className="shrink-0">
            Hotstar
          </h3>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 xl:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-white"></span>
              <span className="block h-0.5 w-5 bg-white"></span>
              <span className="block h-0.5 w-5 bg-white"></span>
            </span>
          </button>

          <div className="hidden items-center gap-6 xl:flex">
            <Link className={navLinkClass} to="/user/taiwinddemo1">
              TailwindDemo1
            </Link>
            <Link className={navLinkClass} to="/user/tailwinddemo2">
              TailwindDemo2
            </Link>
            <Link className={navLinkClass} to="/user/taiwinddashboard">
              TailwindDashboard
            </Link>
            <Link className={navLinkClass} to="/omdbapi">
              OmdbApi
            </Link>
            <Link className={navLinkClass} to="/apidemo2">
              ApiDemo2
            </Link>
            <Link className={navLinkClass} to="/apidemo3">
              ApiDemo3
            </Link>
            <Link className={navLinkClass} to="/apidemo4">
              ApiDemo4
            </Link>
            <Link className={navLinkClass} to="/memory">
              Memory
            </Link>
            <Link className={navLinkClass} to="/reduxapidemo">
              ReduxApiDemo
            </Link>
            <Link className={navLinkClass} to="/books">
              Books
            </Link>
            <Link className={navLinkClass} to="/productcomponent">
              Cart ({cartItems.length})
            </Link>
            <button className="btn btn-danger btn-sm" onClick={logoutHandler}>
              Logout
            </button>
            <button className="btn btn-outline-light btn-sm" onClick={themeHandler}>
              {theme == 'light' ? 'DARK' : 'LIGHT'}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 xl:hidden">
            <Link className={navLinkClass} to="/user/taiwinddemo1" onClick={closeMenu}>
              TailwindDemo1
            </Link>
            <Link className={navLinkClass} to="/user/tailwinddemo2" onClick={closeMenu}>
              TailwindDemo2
            </Link>
            <Link className={navLinkClass} to="/user/taiwinddashboard" onClick={closeMenu}>
              TailwindDashboard
            </Link>
            <Link className={navLinkClass} to="/omdbapi" onClick={closeMenu}>
              OmdbApi
            </Link>
            <Link className={navLinkClass} to="/apidemo2" onClick={closeMenu}>
              ApiDemo2
            </Link>
            <Link className={navLinkClass} to="/apidemo3" onClick={closeMenu}>
              ApiDemo3
            </Link>
            <Link className={navLinkClass} to="/apidemo4" onClick={closeMenu}>
              ApiDemo4
            </Link>
            <Link className={navLinkClass} to="/memory" onClick={closeMenu}>
              Memory
            </Link>
            <Link className={navLinkClass} to="/reduxapidemo" onClick={closeMenu}>
              ReduxApiDemo
            </Link>
            <Link className={navLinkClass} to="/books" onClick={closeMenu}>
              Books
            </Link>
            <Link className={navLinkClass} to="/productcomponent" onClick={closeMenu}>
              Cart ({cartItems.length})
            </Link>
            <div className="flex gap-3 pt-2">
              <button className="btn btn-danger btn-sm" onClick={logoutHandler}>
                Logout
              </button>
              <button className="btn btn-outline-light btn-sm" onClick={themeHandler}>
                {theme == 'light' ? 'DARK' : 'LIGHT'}
              </button>
            </div>
          </div>
        )}
      </nav>

      <div style={{ marginTop: '10px' }}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
