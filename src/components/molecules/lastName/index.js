/* @flow */
import * as React from 'react';
import {connect} from 'react-redux';
import { setTextValidity } from "../../../redux/actions";
import ErrorMessage from '../../atoms/error-message';
import Input from '../../atoms/text-box';
import { LN_VALIDITY } from "../../../redux/actionTypes";
import './style.css'

type Props = {
    lastName: string,
    isLastNameValid: boolean,
    showError: boolean,
    setTextValidity:Function
}

function mapStateToProps(state) {  
    return { 
        lastName : state.lastName,
        isLastNameValid : state.isLastNameValid,
        showError: state.showError
    };
}
  
function mapDispatchToProps(dispatch) {  
    return { 
        setTextValidity: (payload) => {
            dispatch(setTextValidity(LN_VALIDITY, payload));
        }
    }
}

class ConnectedLastName extends React.Component<Props> {

    render() {
        let showError = this.props.showError && !this.props.isLastNameValid;
        return (
            <div className={showError? 'show-error last-container' :'last-container' }>
                <Input id="lastName" placeholder="Last Name" value={this.props.lastName}  onTextUpdate={this.props.setTextValidity} />
                {showError ? <ErrorMessage htmlFor="lastName">Last name is required</ErrorMessage> : ''}
            </div>
        )
    }
}
const lastName = connect(mapStateToProps,mapDispatchToProps)(ConnectedLastName);
export default lastName;