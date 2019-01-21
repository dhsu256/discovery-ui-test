/* @flow */
import * as React from 'react';
import './style.css';

type Props = {
  children: React.Node
}
const Success = (props: Props): React.Element<*> => (
    <p className="success">{props.children}</p>
)

export default Success;