/* @flow */
import * as React from 'react';
import Button from '../../atoms/button';
import Email from '../../molecules/email';
import FirstName from '../../molecules/firstName';
import LastName from '../../molecules/lastName';
import Disclaimer from '../disclaimer';
import {connect} from 'react-redux';
import { submitState, showError } from "../../../redux/actions";
import { SUBMIT_INITIAL, SUBMIT_NAME, STEP_INITIAL, STEP_NAME } from "../../../redux/actionTypes";
import './style.css';

type Props = {
    email: string,
    firstName:string,
    lastName:string,
    isEmailValid: boolean,
    isFirstNameValid: boolean,
    isLastNameValid: boolean,
    step: string,
    submitState:Function,
    showError:Function
}

function mapStateToProps(state) {  
    return { 
        email: state.email,
        firstName:state.firstName,
        lastName:state.lastName,
        isEmailValid: state.isEmailValid,
        isFirstNameValid: state.isFirstNameValid,
        isLastNameValid: state.isLastNameValid,
        step: state.step
    };
}
function mapDispatchToProps(dispatch) {  
    return { 
        submitState: (type) => {
            dispatch(submitState(type));
        },
        showError: () => {
            dispatch(showError());
        }
    }
}
class ConnectedSignupForm extends React.Component<Props> {

  
    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.step === STEP_INITIAL) {
            if (this.props.isEmailValid) {
                this.props.submitState(SUBMIT_INITIAL);
            }
            else {
                this.props.showError();
            }
        }
        else if (this.props.step === STEP_NAME) {
            if (this.props.isFirstNameValid && this.props.isLastNameValid) {
                this.props.submitState(SUBMIT_NAME);
                console.log(this.props);
            }
            else {
                this.props.showError();
            }            
        }
      
    }
    
    render() {

        return (
            <form onSubmit={this.onSubmit.bind(this)} className="group">
                <div className="form-group group">
                    {this.props.step === STEP_INITIAL ? <Email /> : <FirstName />}

                    {this.props.step !== STEP_INITIAL ? <LastName />: ''}
                </div>
                <div className="controls">
                    <Button type="submit">
                        {this.props.step === STEP_INITIAL ? 'NEXT' : 'SIGN UP'}
                    </Button>
                </div>
                {this.props.step === STEP_INITIAL ? <Disclaimer id="optin">I agree to receive information from Discovery Communications in accordance with the following <a href="#">Privacy Policy</a></Disclaimer> : ''}
                
            </form>   
        );

    }
  }
  const SignupForm = connect(mapStateToProps,mapDispatchToProps)(ConnectedSignupForm);
  export default SignupForm;