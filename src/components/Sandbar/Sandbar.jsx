import classes from './Sandbar.module.css';
import { NavLink } from "react-router-dom";
function Sandbar() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li className={classes.li}><NavLink to='/profile' className={({ isActive }) =>
          isActive ? classes.active : classes.a
        }>Profile</NavLink>
        </li>

        <li className={classes.li}><NavLink to='/dialogs' className={({ isActive }) =>
          isActive ? classes.active : classes.a
        }>Messages</NavLink>
        </li>

        <li><a href='#'>News</a></li>
        <li><a href='#'>Music</a></li>
      </ul>
    </nav>
  )
}
export default Sandbar