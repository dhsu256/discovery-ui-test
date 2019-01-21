/* @flow */
import { SUBMIT_INITIAL,SUBMIT_NAME, EMAIL_VALIDITY,FN_VALIDITY, LN_VALIDITY, STEP_INITIAL, STEP_NAME,SHOW_ERROR, STEP_CONGRATULATION} from "../actionTypes";

type State = {
    email: string,
    firstName:string,
    lastName:string,
    isEmailValid: boolean,
    isFirstNameValid: boolean,
    isLastNameValid: boolean,
    showError: boolean,
    step: string   
}

type Action = {
    type: string,
    email: string,
    name: string
}

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const initialState:State = {
    email: '',
    firstName:'',
    lastName:'',
    isEmailValid: false,
    isFirstNameValid: false,
    isLastNameValid: false,
    showError:false,
    step: STEP_INITIAL
};

function signupReducer(state:State = initialState, action:Action) {
    let isValid = false;
    switch (action.type) {
        case EMAIL_VALIDITY:
            
            if (action.email.trim() !=='' && emailRegex.test(action.email)) {
                isValid = true;
            }
            return Object.assign({}, state, {
                email: action.email,
                isEmailValid: isValid,
            });
        case FN_VALIDITY:
            if (action.name.trim() !=='') {
                isValid = true;
            }
            return Object.assign({}, state, {
                firstName: action.name,
                isFirstNameValid: isValid
            }); 
        case LN_VALIDITY:
            if (action.name.trim() !=='') {
                isValid = true;
            }
            return Object.assign({}, state, {
                lastName: action.name,
                isLastNameValid: isValid
            });
        case SHOW_ERROR:
            return Object.assign({}, state, {
                showError: true
            });                            
        case SUBMIT_INITIAL:
            return Object.assign({}, state, {
                step: STEP_NAME,
                showError:false
            })
        case SUBMIT_NAME:
            return Object.assign({}, state, {
                step: STEP_CONGRATULATION,
                showError:false
            })            
        default:
            return state;
    }
};
export default signupReducer;