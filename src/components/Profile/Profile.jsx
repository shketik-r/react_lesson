import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts_Container';
import ProfileInfo from './ProfileInfo/ProfileInfo';



function Profile(props) {


  return (
    <div>
      <ProfileInfo  profile = {props.profile}/>
      <MyPostsContainer />
    </div>
  )
}
export default Profile