/* @flow */
import * as React from 'react';
import './style.css';

type Props = {
  children: React.Node
}
const SuccessSubtext = (props: Props): React.Element<*> => (
    <p className="success-subtext">{props.children}</p>
)

export default SuccessSubtext;