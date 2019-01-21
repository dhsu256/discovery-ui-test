/* @flow */
import * as React from 'react';
import './style.css';

type Props = {
    id: string,
    children: React.Node
}

const Disclaimer = (props: Props): React.Element<*> => {
    const { id, children } = props
  
  
    return (
        <div className="disclaimer group">
            <input type="checkbox" id="{id}" name="{id}" />
            <label htmlFor="{id}">{children}</label>
        </div>
    )
}

export default Disclaimer;