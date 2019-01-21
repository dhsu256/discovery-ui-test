/* @flow */
import * as React from 'react';
import './style.css';

type Props = {
  children: React.Node
}
const HeaderSubtext = (props: Props): React.Element<*> => (
    <h2 className="discovery-header-subtext">{props.children}</h2>
)

export default HeaderSubtext;