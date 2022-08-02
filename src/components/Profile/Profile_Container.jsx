
import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { setProfile } from '../../redux/profile_reducer';


class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.userId
    // if(!userId){
    //   userId = "2"
    // }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(res => {
        this.props.setProfile(res.data);
      });
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

export default connect(mapStateToProps, { setProfile })(ComponentWithRouterProp)