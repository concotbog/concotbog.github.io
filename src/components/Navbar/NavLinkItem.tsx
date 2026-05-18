import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export function NavLinkItem({
  to,
  label,
  onNavigate,
}: Readonly<{
  to: string
  label: string
  onNavigate?: () => void
}>) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
      onClick={onNavigate}
    >
      {label}
    </NavLink>
  )
}

