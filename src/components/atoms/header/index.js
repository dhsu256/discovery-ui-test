/* @flow */
import * as React from 'react';
import './style.css';

type Props = {
  children: React.Node
}
const Header = (props: Props): React.Element<*> => (
    <h1 className="discovery-header">{props.children}</h1>
)

export default Header;