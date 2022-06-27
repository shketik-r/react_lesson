import classes from './FrendOfSandbar.module.css';
import { NavLink } from "react-router-dom";

function FrendOfSandbar(props) {
  return (
  <div className={classes.frend_wrapper}>
    <img  src={window.location.origin + '/pngwing.png'}  alt="userFoto" />
    <NavLink to={`#` + props.id}>{props.name}</NavLink>

  </div>
  )
}
export default FrendOfSandbar