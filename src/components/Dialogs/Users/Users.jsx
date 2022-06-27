import { NavLink } from 'react-router-dom';
import classes from './User.module.css';



function Users(props) {
    return (<li className={classes.user_name}>
        <NavLink to={`/dialogs/` + props.id}>{props.name}</NavLink>
    </li>
    )
}

export default Users