
import React from 'react';
import { connect } from 'react-redux';

import { setAuthUserData, getAuthThunkCreater} from '../../redux/auth_reducer'
import Header from './Header';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthThunkCreater()    //Thunk  регистрация
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}



const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {
    setAuthUserData,
    getAuthThunkCreater,
})(HeaderContainer)