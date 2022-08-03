
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { setProfile, getProfileThunkCreater } from '../../redux/profile_reducer';



class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.getProfileThunkCreater(this.props.userId) // Thunk получить пользователя
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
        />
      </div>
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})


function ComponentWithRouterProp(props) {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();

  return (
    <ProfileContainer
      {...props}
      router={{ location, navigate, params }}
      userId={params.userId ? params.userId : '2'}
    />
  );
}

export default connect(mapStateToProps, {
  setProfile,
  getProfileThunkCreater,
})(ComponentWithRouterProp)