import classes from './FrendOfSandbar.module.css';
import { NavLink } from "react-router-dom";

import userFoto from "../../../images/pngwing.png"

function FrendOfSandbar(props) {
  return (
  <div className={classes.frend_wrapper}>
    <img  src={userFoto}  alt="userFoto" />
    <NavLink to={`#` + props.id}>{props.name}</NavLink>

  </div>
  )
}
export default FrendOfSandbar