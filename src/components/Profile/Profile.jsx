import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'



function Profile(props) {
  return (
    <div>
      <div className={classes.section_fon}>
        <img src="https://www.s-centres.ru/upload/files/product/Sony_Alpha_%CE%B11_4.jpg" alt="fon" />
      </div>
      <div className={classes.section_user}>
        <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="logo" />
        <div className={classes.date_user}>
          <p className={classes.name_user}>Dog</p>
          <ul className={classes.list_user}>
            <li>Data of Birth: 1 januari</li>
            <li>Siti: Minsk</li>
          </ul>
        </div>
      </div>
      <MyPosts 
      postData={props.postData}
      dispatch = {props.dispatch}
      />
    </div>
  )
}
export default Profile