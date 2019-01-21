/* @flow */
import * as React from 'react';
import {connect} from 'react-redux';
import { setEmailValidity } from "../../../redux/actions";
import ErrorMessage from '../../atoms/error-message';
import Input from '../../atoms/text-box';
import { EMAIL_VALIDITY } from "../../../redux/actionTypes";
import './style.css';

type Props = {
    email: string,
    isEmailValid: boolean,
    showError:boolean,
    setEmailValidity:Function
}

function mapStateToProps(state) {  
    return { 
        email : state.email,
        isEmailValid : state.isEmailValid,
        showError: state.showError
    };
}
  
function mapDispatchToProps(dispatch) {  
    return { 
        setEmailValidity: (payload) => {
            dispatch(setEmailValidity(payload));
        }
    }
}

class ConnectedEmail extends React.Component<Props> {    
    render() {
        let showError = (this.props.email !=='' && !this.props.isEmailValid ) || this.props.showError;

        return (
            <div className={showError ? 'show-error email-container' :'email-container' }>
                <Input id="email" placeholder="Enter email address" value={this.props.email}  onTextUpdate={this.props.setEmailValidity} />
                {showError ? <ErrorMessage htmlFor="email">Email is required and must be valid</ErrorMessage> : ''}
            </div>
        )
    }
}
const Email = connect(mapStateToProps,mapDispatchToProps)(ConnectedEmail);
export default Email;