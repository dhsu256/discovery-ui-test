/* @flow */
import * as React from 'react';
import './style.css';

type Props = {
  children: React.Node
}
const ErrorMessage = (props: Props): React.Element<*> => (
    <span className="error-message">{props.children}</span>
)

export default ErrorMessage;