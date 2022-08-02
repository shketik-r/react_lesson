import classes from './Header.module.css';
import { NavLink } from "react-router-dom";


function Header(props) {
    return (
        <header className={classes.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/512px-ZDF_logo%21_Logo_2021.svg.png?20211204213142" alt='bmw' />
            {!props.isAuth ?
                <NavLink to='/login' className={classes.login_blok}>
                    <div className={classes.login}>Login</div>
                </NavLink> :
                <div className={classes.login_blok}>
                    
                    <div className={classes.login}>{props.login}</div>
                </div>

            }


        </header>
    )
}
export default Header