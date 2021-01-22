import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect';
import { setUserProfile, setStatus, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';
import { compose } from 'redux';



class ProfileContainer extends React.Component {
  
  componentDidMount (){
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 13492;
    }
    this.props.setUserProfile(userId);
    this.props.setStatus(userId);
  };

  render = () => { return <Profile {...this.props} />};
}


//w mapStateToProps zakydaju z state dani profile zagrueni z servera
let mapStateToProps = (state) => {
  return{
    userProfile: state.profilePage.userProfile,
    authUserId: state.authorization,
    userStatus: state.profilePage.userStatus
  };
}


export default compose(
  //3
  //connect prokyduje propsy w container component
  connect(mapStateToProps,{setUserProfile, setStatus, updateStatus}),

  //2
  //pisla obertania withRedirect obertaju ProfileContainer szcze odnoju containernoju komponentoju, jaka prokyduje
  //w Profile container dani z URL
  withRouter,

  //1
  //obertaju Componentu withAuthRedirect Hight Order Component, kotra powertaje w 
  //URL /login, jakszczo korystuwach ne zalogowanyj, tym samy my ne moerzemo distatysia
  //do kontentu, jakszo my ne zalogowani (isAuth = false)
  withAuthRedirect
)(ProfileContainer);