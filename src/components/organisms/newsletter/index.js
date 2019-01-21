/* @flow */
import * as React from 'react';
import {connect} from 'react-redux';
import Header from '../../atoms/header';
import HeaderSubtext from '../../atoms/header-subtext';
import SignupForm from '../../molecules/form';
import Success from '../../atoms/success';
import SuccessSubtext from '../../atoms/success-subtext';
import { SUBMIT_EMAIL, SUBMIT_NAME, STEP_INITIAL, STEP_NAME, STEP_CONGRATULATION } from "../../../redux/actionTypes";
import './style.css';

type Props = {
  currentView: string
}

function mapStateToProps(state){
  return {
      currentView: state.step
  }
}

//const HEADER_STEP1 = "SIGN UP FOR THE TLC NEWSLETTER";
//const HEADER_STEP2 = "Almost Done! Please Enter Your First and Last Name.";

class ConnectedNewsletterSignup extends React.Component<Props> {
  
  render() {
    let HEADER_STEP1 = <HeaderSubtext>SIGN UP FOR <br />THE TLC NEWSLETTER</HeaderSubtext>
    let HEADER_STEP2 = <HeaderSubtext>Almost Done! Please Enter <br/>Your First and Last Name.</HeaderSubtext>

    return (
      <div id="discovery-newsletter-signup" className={this.props.currentView.toLowerCase()}>
          <div className="centerWrapper">
            <div className="heading">
              <Header>join the list</Header>
            </div>
            <div class="signup-container">
              <div className="form">
                {this.props.currentView === STEP_INITIAL ? HEADER_STEP1: HEADER_STEP2}
                
                <SignupForm />
              </div> 
            </div>
          </div>
          <div className="thank-you">
                <div className="centerWrapper">
                  <div className="heading">
                    <Header>congratulations!</Header>
                  </div>
                  <div className="success-container">
                    <Success>Thank you for signing up!</Success>
                    <SuccessSubtext>Look out for the latest news on your favorite shows.</SuccessSubtext>
                  </div>
                </div>
          </div>

      </div>
    );
  }
}

const NewsletterSignup = connect(mapStateToProps)(ConnectedNewsletterSignup);
export default NewsletterSignup;