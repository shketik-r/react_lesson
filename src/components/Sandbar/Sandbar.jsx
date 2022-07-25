import classes from './Sandbar.module.css';
import { NavLink } from "react-router-dom";


function Sandbar(props) {
  

  

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

     
        <li className={classes.li}><NavLink to='/users' className={({ isActive }) =>
          isActive ? classes.active : classes.a
        }>Find Users</NavLink>
        </li>

        <li className={classes.li}><NavLink to='/frends' className={({ isActive }) =>
          isActive ? classes.active : classes.a
        }>Frends</NavLink>
        </li>
       
      </ul>
 
    </nav>
  )
}
export default Sandbar