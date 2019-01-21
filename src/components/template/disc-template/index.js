import * as React from 'react';

type Prop = {
    header: React.Node,
    main: React.Node,
    footer: React.Node
}

const DiscoveryTemplate = (props: Props): React.Element<*> => {
    const { header, main, footer } = props
    return (
        <div id="page">
            <header>
                {header}
            </header>
            <main>
                {main}
            </main>
            <footer>
                {footer}
            </footer>
        </div>
    )
}

export default DiscoveryTemplate;