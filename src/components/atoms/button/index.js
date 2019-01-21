/* @flow */
import * as React from 'react';
import styles from './style.css';

type Props = {
  type: string,
  onClick?: Function,
  children: React.Node
}

const Button = (props: Props): React.Element<*> => {
  const { type, onClick, children } = props
  return (
    <button class="discovery-btn" type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;