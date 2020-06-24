import React, { Fragment } from 'react'

import Default from './default'

export default () => {
    return (
        <Fragment>
            <h1 className="title">Sider</h1>

            <p className="text">
                Sider or side navigation menu used for primary navigation of banking app
            </p>

            <p className="text">
                Contains:
                <ul>
                    <li>Branding logo</li>
                    <li>Primary navigation</li>
                    <li>Footer with copyrights help button and collapse button</li>
                </ul>
            </p>

            <h2 className="title">Examples:</h2>

            <Default />

        </Fragment>
    )
}