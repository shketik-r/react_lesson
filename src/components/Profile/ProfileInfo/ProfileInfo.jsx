import classes from './ProfileInfo.module.css';
import React from 'react';
import Preloader from '../../common/Preloader/Preloader'
import UserFoto from '../../../images/pngwing.png'

function ProfileInfo(props) {
    if(!props.profile){
        return <div className={classes.preloader}><Preloader/></div>
    }else{
        return (
            <div>
                <div className={classes.section_fon}>
                    <img src="https://www.s-centres.ru/upload/files/product/Sony_Alpha_%CE%B11_4.jpg" alt="fon" />
                </div>
                <div className={classes.section_user}>
                    {/* <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="logo" /> */}
                   
                    <img src={props.profile.photos.large ? props.profile.photos.large : UserFoto } alt="logo" />
    
                    <div className={classes.date_user}>
                        <p className={classes.name_user}>{props.profile.fullName}</p>
                    
                        <ul className={classes.list_user}>
                            <li><span className={classes.status} >Starus:</span> {props.profile.aboutMe}</li>
                        </ul>
                    </div>
                </div>
            </div>
    
        )
    }
    
    // return (
    //     <div>
    //         <div className={classes.section_fon}>
    //             <img src="https://www.s-centres.ru/upload/files/product/Sony_Alpha_%CE%B11_4.jpg" alt="fon" />
    //         </div>
    //         <div className={classes.section_user}>
    //             <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="logo" />
    //             {/* <img src={props.profile.photos.large} alt="logo" /> */}

    //             <div className={classes.date_user}>
    //                 <p className={classes.name_user}>Dog</p>
    //                 <ul className={classes.list_user}>
    //                     <li>Data of Birth: 1 januari</li>
    //                     <li>Siti: Minsk</li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>

    // )
}
export default ProfileInfo