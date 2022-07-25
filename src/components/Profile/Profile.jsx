import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts_Container';
import ProfileInfo from './ProfileInfo/ProfileInfo';



function Profile() {


  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}
export default Profile