/* @flow */
import * as React from 'react';
import {connect} from 'react-redux';
import { setTextValidity } from "../../../redux/actions";
import ErrorMessage from '../../atoms/error-message';
import Input from '../../atoms/text-box';
import { FN_VALIDITY } from "../../../redux/actionTypes";
import './style.css';

type Props = {
    firstName: string,
    isFirstNameValid: boolean,
    showError:boolean,
    setTextValidity:Function
}

function mapStateToProps(state) {  
    return { 
        firstName : state.firstName,
        isFirstNameValid : state.isFirstNameValid,
        showError: state.showError
    };
}
  
function mapDispatchToProps(dispatch) {  
    return { 
        setTextValidity: (payload) => {
            dispatch(setTextValidity(FN_VALIDITY, payload));
        }
    }
}

class ConnectedFirstName extends React.Component<Props> {

    render() {
        let showError = this.props.showError && !this.props.isFirstNameValid;
        return (
            <div className={showError? 'show-error first-container' :'first-container' }>
                <Input id="firstName" placeholder="First Name" value={this.props.firstName}  onTextUpdate={this.props.setTextValidity} />
                {showError ? <ErrorMessage htmlFor="firstName">First name is required</ErrorMessage> : ''}
            </div>
        )
    }
}
const FirstName = connect(mapStateToProps,mapDispatchToProps)(ConnectedFirstName);
export default FirstName;