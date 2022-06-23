import classes from './Sandbar.module.css';
import { NavLink } from "react-router-dom";
function Sandbar() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li className={classes.li}><NavLink to='/' className={({ isActive }) =>
          isActive ? classes.active : classes.a
        }>Profile</NavLink>
        </li>

        <li className={classes.li}><NavLink to='/dialogs' className={({ isActive }) =>
          isActive ? classes.active : classes.a
        }>Messages</NavLink>
        </li>

        <li className={classes.li}><NavLink to='/news' className={({ isActive }) =>
          isActive ? classes.active : classes.a
        }>News</NavLink>
        </li>
        <li className={classes.li}><NavLink to='/music' className={({ isActive }) =>
          isActive ? classes.active : classes.a
        }>Music</NavLink>
        </li>

      </ul>
    </nav>
  )
}
export default Sandbar