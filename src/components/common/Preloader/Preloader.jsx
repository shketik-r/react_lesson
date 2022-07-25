import preloader from '../../../images/loader.gif';
import classes from './Preloader.module.css';
import React from 'react';

let Preloader = (props)=>{
 return   <img src={preloader} className={classes.preloader}/> 
    
}


export default Preloader
